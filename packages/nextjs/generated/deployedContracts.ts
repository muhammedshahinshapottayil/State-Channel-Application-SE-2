const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        Streamer: {
          address: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
          abi: [
            {
              inputs: [],
              name: "Already__Channel__Exist",
              type: "error",
            },
            {
              inputs: [],
              name: "Channel__Does__Not__Exist",
              type: "error",
            },
            {
              inputs: [],
              name: "Insufficient__Balance",
              type: "error",
            },
            {
              inputs: [],
              name: "No__Closing__Channel",
              type: "error",
            },
            {
              inputs: [],
              name: "Redundant__Transaction",
              type: "error",
            },
            {
              inputs: [],
              name: "Time__Is__Not__Exceeded",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Withdrawal__Failed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "Challenged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "Closed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Opened",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Withdrawn",
              type: "event",
            },
            {
              inputs: [],
              name: "challengeChannel",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "defundChannel",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fundChannel",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "channel",
                  type: "address",
                },
              ],
              name: "timeLeft",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "updatedBalance",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                      ],
                      internalType: "struct Streamer.Signature",
                      name: "sig",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Streamer.Voucher",
                  name: "voucher",
                  type: "tuple",
                },
              ],
              name: "withdrawEarnings",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Streamer: {
          address: "0xa604C6Dd3127581F89aF6242F12a157Fd22D7F64",
          abi: [
            {
              inputs: [],
              name: "Already__Channel__Exist",
              type: "error",
            },
            {
              inputs: [],
              name: "Channel__Does__Not__Exist",
              type: "error",
            },
            {
              inputs: [],
              name: "Insufficient__Balance",
              type: "error",
            },
            {
              inputs: [],
              name: "No__Closing__Channel",
              type: "error",
            },
            {
              inputs: [],
              name: "Redundant__Transaction",
              type: "error",
            },
            {
              inputs: [],
              name: "Time__Is__Not__Exceeded",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Withdrawal__Failed",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "Challenged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "Closed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Opened",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "Withdrawn",
              type: "event",
            },
            {
              inputs: [],
              name: "challengeChannel",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "defundChannel",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "fundChannel",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "channel",
                  type: "address",
                },
              ],
              name: "timeLeft",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "updatedBalance",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "r",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes32",
                          name: "s",
                          type: "bytes32",
                        },
                        {
                          internalType: "uint8",
                          name: "v",
                          type: "uint8",
                        },
                      ],
                      internalType: "struct Streamer.Signature",
                      name: "sig",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Streamer.Voucher",
                  name: "voucher",
                  type: "tuple",
                },
              ],
              name: "withdrawEarnings",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
