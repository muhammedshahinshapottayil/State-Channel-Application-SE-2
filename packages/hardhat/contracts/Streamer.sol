// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

error Already__Channel__Exist();
error Insufficient__Balance();
error Redundant__Transaction();
error Channel__Does__Not__Exist();
error No__Closing__Channel();
error Time__Is__Not__Exceeded();
error Withdrawal__Failed(address, uint256);


contract Streamer is Ownable {
  event Opened(address, uint256);
  event Challenged(address);
  event Withdrawn(address, uint256);
  event Closed(address);

  mapping(address => uint256) balances;
  mapping(address => uint256) canCloseAt;

  struct Voucher {
    uint256 updatedBalance;
    Signature sig;
  }
  struct Signature {
    bytes32 r;
    bytes32 s;
    uint8 v;
  }

  function fundChannel() public payable {
    /*
      Checkpoint 2: fund a channel

      Complete this function so that it:
      - reverts if msg.sender already has a running channel (ie, if balances[msg.sender] != 0)
      - updates the balances mapping with the eth received in the function call
      - emits an Opened event
    */

   if(balances[msg.sender] != 0) revert Already__Channel__Exist();
    balances[msg.sender] = msg.value;
    emit Opened(msg.sender,msg.value);

  }

  function timeLeft(address channel) public view returns (uint256) {
    if (canCloseAt[channel] == 0 || canCloseAt[channel] < block.timestamp) return 0;
    return canCloseAt[channel] - block.timestamp;
  }

function withdrawEarnings(Voucher calldata voucher) public onlyOwner {
    bytes32 hashed = keccak256(abi.encode(voucher.updatedBalance));
    bytes memory prefixed = abi.encodePacked("\x19Ethereum Signed Message:\n32", hashed);
    bytes32 prefixedHashed = keccak256(prefixed);
    address signer = ecrecover(prefixedHashed, voucher.sig.v, voucher.sig.r, voucher.sig.s);
    if (voucher.updatedBalance == balances[signer]) revert Redundant__Transaction();
    if (balances[signer] < voucher.updatedBalance ) revert Insufficient__Balance();
    uint256 payout = balances[signer] - voucher.updatedBalance;
    balances[signer] = voucher.updatedBalance;
    (bool success,) = payable(address(owner())).call{value : payout}("");
    if (!success) revert Withdrawal__Failed(signer, payout); 
    emit Withdrawn(signer, payout);
}




  /*
    Checkpoint 5a: Challenge the channel

    Create a public challengeChannel() function that:
    - checks that msg.sender has an open channel
    - updates canCloseAt[msg.sender] to some future time
    - emits a Challenged event
  */

 function challengeChannel() public {
  if (balances[msg.sender] == 0) revert Channel__Does__Not__Exist(); 
    canCloseAt[msg.sender] = block.timestamp + 30 seconds;
    emit Challenged(msg.sender);
 }

  /*
    Checkpoint 5b: Close the channel

    Create a public defundChannel() function that:
    - checks that msg.sender has a closing channel
    - checks that the current time is later than the closing time
    - sends the channel's remaining funds to msg.sender, and sets the balance to 0
    - emits the Closed event
  */
 function defundChannel() public {
  if (canCloseAt[msg.sender] == 0) revert No__Closing__Channel();
  if (canCloseAt[msg.sender] > block.timestamp) revert Time__Is__Not__Exceeded();
  uint256 amountToPay = balances[msg.sender];
  canCloseAt[msg.sender] = 0;
  balances[msg.sender] = 0;
  (bool status,) = payable(address(msg.sender)).call{value : amountToPay}("");
  if (!status) revert Withdrawal__Failed(msg.sender, amountToPay);
  emit Closed(msg.sender);
 }


}
