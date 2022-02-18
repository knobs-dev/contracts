/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ArraysToGo, ArraysToGoInterface } from "../ArraysToGo";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "ArrayCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "ArrayInitialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "arrayName",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "data",
        type: "uint256[]",
      },
    ],
    name: "fillArrayByName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "arrayName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "numberOfElements",
        type: "uint256",
      },
    ],
    name: "fillArrayByNameProgressively",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "arrayName",
        type: "string",
      },
    ],
    name: "getArrayByName",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "arrayName",
        type: "string",
      },
    ],
    name: "getArrayInfo",
    outputs: [
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
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
        internalType: "string",
        name: "arrayName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "arrayName",
        type: "string",
      },
    ],
    name: "safeGetArrayByName",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611768806100206000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c8062693599146100665780631a752576146100965780634b020eae146100b25780638beaf7d7146100e25780639d2744a3146100fe578063ddde5cff1461011a575b600080fd5b610080600480360381019061007b9190610dc0565b61014e565b60405161008d9190610ed1565b60405180910390f35b6100b060048036038101906100ab9190610f1f565b610237565b005b6100cc60048036038101906100c79190610dc0565b6105d7565b6040516100d99190610ed1565b60405180910390f35b6100fc60048036038101906100f79190610f1f565b610650565b005b61011860048036038101906101139190611043565b610849565b005b610134600480360381019061012f9190610dc0565b610b72565b60405161014595949392919061113f565b60405180910390f35b606081600081604051610161919061120c565b908152602001604051809103902060020160009054906101000a900460ff166101bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b690611280565b60405180910390fd5b6000836040516101cf919061120c565b908152602001604051809103902060030180548060200260200160405190810160405280929190818152602001828054801561022a57602002820191906000526020600020905b815481526020019060010190808311610216575b5050505050915050919050565b813373ffffffffffffffffffffffffffffffffffffffff1660008260405161025f919061120c565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102de906112ec565b60405180910390fd5b82600015156000826040516102fc919061120c565b908152602001604051809103902060020160009054906101000a900460ff1615151461035d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035490611358565b60405180910390fd5b6000808560405161036e919061120c565b908152602001604051809103902060030180549050905060008086604051610396919061120c565b9081526020016040518091039020600301805490506000876040516103bb919061120c565b9081526020016040518091039020600101546103d791906113a7565b90506000858211156103eb578590506103ef565b8190505b60008390505b818461040191906113db565b81101561046f57600088604051610418919061120c565b908152602001604051809103902060030160018261043691906113db565b9080600181540180825580915050600190039060005260206000200160009091909190915055808061046790611431565b9150506103f5565b50600087604051610480919061120c565b9081526020016040518091039020600101546000886040516104a2919061120c565b90815260200160405180910390206003018054905014156105ce57600080886040516104ce919061120c565b90815260200160405180910390206003016040516020016104ef9190611582565b6040516020818303038152906040528051906020012090506001600089604051610519919061120c565b908152602001604051809103902060020160006101000a81548160ff02191690831515021790555080600089604051610552919061120c565b90815260200160405180910390206004018190555080600089604051610578919061120c565b90815260200160405180910390206001015489604051610598919061120c565b60405180910390207feabd90ad582421a7db1682e295ade8af670a41355753f0bf87d5d480cc8986d360405160405180910390a4505b50505050505050565b60606000826040516105e9919061120c565b908152602001604051809103902060030180548060200260200160405190810160405280929190818152602001828054801561064457602002820191906000526020600020905b815481526020019060010190808311610630575b50505050509050919050565b60008111610693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068a9061160b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000836040516106bb919061120c565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073a90611677565b60405180910390fd5b33600083604051610754919061120c565b908152602001604051809103902060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000836040516107b4919061120c565b908152602001604051809103902060010181905550600080836040516107da919061120c565b908152602001604051809103902060020160006101000a81548160ff0219169083151502179055508082604051610811919061120c565b60405180910390207fcb1cc995cde5b6a9da8de8c610fba52c6cc297927d0a94e3945c8c2c410097b060405160405180910390a35050565b813373ffffffffffffffffffffffffffffffffffffffff16600082604051610871919061120c565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f0906112ec565b60405180910390fd5b600083604051610909919061120c565b90815260200160405180910390206003018054905060008460405161092e919061120c565b90815260200160405180910390206001015461094a91906113a7565b8251111561098d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610984906116e3565b60405180910390fd5b60005b8251811015610a0e576000846040516109a9919061120c565b90815260200160405180910390206003018382815181106109cd576109cc611703565b5b602002602001015190806001815401808255809150506001900390600052602060002001600090919091909150558080610a0690611431565b915050610990565b50600083604051610a1f919061120c565b908152602001604051809103902060010154600084604051610a41919061120c565b9081526020016040518091039020600301805490501415610b6d5760008084604051610a6d919061120c565b9081526020016040518091039020600301604051602001610a8e9190611582565b6040516020818303038152906040528051906020012090506001600085604051610ab8919061120c565b908152602001604051809103902060020160006101000a81548160ff02191690831515021790555080600085604051610af1919061120c565b90815260200160405180910390206004018190555080600085604051610b17919061120c565b90815260200160405180910390206001015485604051610b37919061120c565b60405180910390207feabd90ad582421a7db1682e295ade8af670a41355753f0bf87d5d480cc8986d360405160405180910390a4505b505050565b60008060008060008086604051610b89919061120c565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600087604051610bcb919061120c565b908152602001604051809103902060010154600088604051610bed919061120c565b908152602001604051809103902060020160009054906101000a900460ff16600089604051610c1c919061120c565b90815260200160405180910390206004015460008a604051610c3e919061120c565b9081526020016040518091039020600301805490509450945094509450945091939590929450565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610ccd82610c84565b810181811067ffffffffffffffff82111715610cec57610ceb610c95565b5b80604052505050565b6000610cff610c66565b9050610d0b8282610cc4565b919050565b600067ffffffffffffffff821115610d2b57610d2a610c95565b5b610d3482610c84565b9050602081019050919050565b82818337600083830152505050565b6000610d63610d5e84610d10565b610cf5565b905082815260208101848484011115610d7f57610d7e610c7f565b5b610d8a848285610d41565b509392505050565b600082601f830112610da757610da6610c7a565b5b8135610db7848260208601610d50565b91505092915050565b600060208284031215610dd657610dd5610c70565b5b600082013567ffffffffffffffff811115610df457610df3610c75565b5b610e0084828501610d92565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b610e4881610e35565b82525050565b6000610e5a8383610e3f565b60208301905092915050565b6000602082019050919050565b6000610e7e82610e09565b610e888185610e14565b9350610e9383610e25565b8060005b83811015610ec4578151610eab8882610e4e565b9750610eb683610e66565b925050600181019050610e97565b5085935050505092915050565b60006020820190508181036000830152610eeb8184610e73565b905092915050565b610efc81610e35565b8114610f0757600080fd5b50565b600081359050610f1981610ef3565b92915050565b60008060408385031215610f3657610f35610c70565b5b600083013567ffffffffffffffff811115610f5457610f53610c75565b5b610f6085828601610d92565b9250506020610f7185828601610f0a565b9150509250929050565b600067ffffffffffffffff821115610f9657610f95610c95565b5b602082029050602081019050919050565b600080fd5b6000610fbf610fba84610f7b565b610cf5565b90508083825260208201905060208402830185811115610fe257610fe1610fa7565b5b835b8181101561100b5780610ff78882610f0a565b845260208401935050602081019050610fe4565b5050509392505050565b600082601f83011261102a57611029610c7a565b5b813561103a848260208601610fac565b91505092915050565b6000806040838503121561105a57611059610c70565b5b600083013567ffffffffffffffff81111561107857611077610c75565b5b61108485828601610d92565b925050602083013567ffffffffffffffff8111156110a5576110a4610c75565b5b6110b185828601611015565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110e6826110bb565b9050919050565b6110f6816110db565b82525050565b61110581610e35565b82525050565b60008115159050919050565b6111208161110b565b82525050565b6000819050919050565b61113981611126565b82525050565b600060a08201905061115460008301886110ed565b61116160208301876110fc565b61116e6040830186611117565b61117b6060830185611130565b61118860808301846110fc565b9695505050505050565b600081519050919050565b600081905092915050565b60005b838110156111c65780820151818401526020810190506111ab565b838111156111d5576000848401525b50505050565b60006111e682611192565b6111f0818561119d565b93506112008185602086016111a8565b80840191505092915050565b600061121882846111db565b915081905092915050565b600082825260208201905092915050565b7f4172726179206e6f742079657420726561647900000000000000000000000000600082015250565b600061126a601383611223565b915061127582611234565b602082019050919050565b600060208201905081810360008301526112998161125d565b9050919050565b7f4e6f74207468652063726561746f720000000000000000000000000000000000600082015250565b60006112d6600f83611223565b91506112e1826112a0565b602082019050919050565b60006020820190508181036000830152611305816112c9565b9050919050565b7f4172726179206973207265616479000000000000000000000000000000000000600082015250565b6000611342600e83611223565b915061134d8261130c565b602082019050919050565b6000602082019050818103600083015261137181611335565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006113b282610e35565b91506113bd83610e35565b9250828210156113d0576113cf611378565b5b828203905092915050565b60006113e682610e35565b91506113f183610e35565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561142657611425611378565b5b828201905092915050565b600061143c82610e35565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561146f5761146e611378565b5b600182019050919050565b600081549050919050565b600081905092915050565b60008190508160005260206000209050919050565b6114ae81610e35565b82525050565b60006114c083836114a5565b60208301905092915050565b60008160001c9050919050565b6000819050919050565b60006114f66114f1836114cc565b6114d9565b9050919050565b600061150982546114e3565b9050919050565b6000600182019050919050565b60006115288261147a565b6115328185611485565b935061153d83611490565b8060005b8381101561157557611552826114fd565b61155c88826114b4565b975061156783611510565b925050600181019050611541565b5085935050505092915050565b600061158e828461151d565b915081905092915050565b7f4e6f7420706f737369626c6520746f207265676973746572206172726179732060008201527f77697468207a65726f20656c656d656e74730000000000000000000000000000602082015250565b60006115f5603283611223565b915061160082611599565b604082019050919050565b60006020820190508181036000830152611624816115e8565b9050919050565b7f4e616d6520616c72656164792074616b656e0000000000000000000000000000600082015250565b6000611661601283611223565b915061166c8261162b565b602082019050919050565b6000602082019050818103600083015261169081611654565b9050919050565b7f546f206d75636820646174610000000000000000000000000000000000000000600082015250565b60006116cd600c83611223565b91506116d882611697565b602082019050919050565b600060208201905081810360008301526116fc816116c0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212207f1a13a5d0da06e499dff3f3706fb15484f06366f327558dca7ef20a15ca45b964736f6c634300080b0033";

type ArraysToGoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArraysToGoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArraysToGo__factory extends ContractFactory {
  constructor(...args: ArraysToGoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ArraysToGo";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ArraysToGo> {
    return super.deploy(overrides || {}) as Promise<ArraysToGo>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ArraysToGo {
    return super.attach(address) as ArraysToGo;
  }
  connect(signer: Signer): ArraysToGo__factory {
    return super.connect(signer) as ArraysToGo__factory;
  }
  static readonly contractName: "ArraysToGo";
  public readonly contractName: "ArraysToGo";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArraysToGoInterface {
    return new utils.Interface(_abi) as ArraysToGoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArraysToGo {
    return new Contract(address, _abi, signerOrProvider) as ArraysToGo;
  }
}