/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Test, TestInterface } from "../Test";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "arrayToGoAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "arrayName",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getTokenIds",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIds",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620008583803806200085883398181016040528101906200003791906200034d565b8173ffffffffffffffffffffffffffffffffffffffff1662693599826040518263ffffffff1660e01b815260040162000071919062000410565b600060405180830381865afa1580156200008f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190620000ba91906200054a565b60009080519060200190620000d1929190620000da565b5050506200059b565b82805482825590600052602060002090810192821562000119579160200282015b8281111562000118578251825591602001919060010190620000fb565b5b5090506200012891906200012c565b5090565b5b80821115620001475760008160009055506001016200012d565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200018c826200015f565b9050919050565b6200019e816200017f565b8114620001aa57600080fd5b50565b600081519050620001be8162000193565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200021982620001ce565b810181811067ffffffffffffffff821117156200023b576200023a620001df565b5b80604052505050565b6000620002506200014b565b90506200025e82826200020e565b919050565b600067ffffffffffffffff821115620002815762000280620001df565b5b6200028c82620001ce565b9050602081019050919050565b60005b83811015620002b95780820151818401526020810190506200029c565b83811115620002c9576000848401525b50505050565b6000620002e6620002e08462000263565b62000244565b905082815260208101848484011115620003055762000304620001c9565b5b6200031284828562000299565b509392505050565b600082601f830112620003325762000331620001c4565b5b815162000344848260208601620002cf565b91505092915050565b6000806040838503121562000367576200036662000155565b5b60006200037785828601620001ad565b925050602083015167ffffffffffffffff8111156200039b576200039a6200015a565b5b620003a9858286016200031a565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000620003dc82620003b3565b620003e88185620003be565b9350620003fa81856020860162000299565b6200040581620001ce565b840191505092915050565b600060208201905081810360008301526200042c8184620003cf565b905092915050565b600067ffffffffffffffff821115620004525762000451620001df565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6200047d8162000468565b81146200048957600080fd5b50565b6000815190506200049d8162000472565b92915050565b6000620004ba620004b48462000434565b62000244565b90508083825260208201905060208402830185811115620004e057620004df62000463565b5b835b818110156200050d5780620004f888826200048c565b845260208401935050602081019050620004e2565b5050509392505050565b600082601f8301126200052f576200052e620001c4565b5b815162000541848260208601620004a3565b91505092915050565b60006020828403121562000563576200056262000155565b5b600082015167ffffffffffffffff8111156200058457620005836200015a565b5b620005928482850162000517565b91505092915050565b6102ad80620005ab6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806367f718a91461003b578063d58778d614610059575b600080fd5b610043610089565b60405161005091906101cd565b60405180910390f35b610073600480360381019061006e9190610220565b6100e1565b604051610080919061025c565b60405180910390f35b606060008054806020026020016040519081016040528092919081815260200182805480156100d757602002820191906000526020600020905b8154815260200190600101908083116100c3575b5050505050905090565b600081815481106100f157600080fd5b906000526020600020016000915090505481565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b61014481610131565b82525050565b6000610156838361013b565b60208301905092915050565b6000602082019050919050565b600061017a82610105565b6101848185610110565b935061018f83610121565b8060005b838110156101c05781516101a7888261014a565b97506101b283610162565b925050600181019050610193565b5085935050505092915050565b600060208201905081810360008301526101e7818461016f565b905092915050565b600080fd5b6101fd81610131565b811461020857600080fd5b50565b60008135905061021a816101f4565b92915050565b600060208284031215610236576102356101ef565b5b60006102448482850161020b565b91505092915050565b61025681610131565b82525050565b6000602082019050610271600083018461024d565b9291505056fea26469706673582212203c0788a1c332a8b4a8c727a07f3141443fc2ae328b6b7c19c5ad6b02b765f22c64736f6c634300080b0033";

type TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Test__factory extends ContractFactory {
  constructor(...args: TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Test";
  }

  deploy(
    arrayToGoAddress: string,
    arrayName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Test> {
    return super.deploy(
      arrayToGoAddress,
      arrayName,
      overrides || {}
    ) as Promise<Test>;
  }
  getDeployTransaction(
    arrayToGoAddress: string,
    arrayName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      arrayToGoAddress,
      arrayName,
      overrides || {}
    );
  }
  attach(address: string): Test {
    return super.attach(address) as Test;
  }
  connect(signer: Signer): Test__factory {
    return super.connect(signer) as Test__factory;
  }
  static readonly contractName: "Test";
  public readonly contractName: "Test";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestInterface {
    return new utils.Interface(_abi) as TestInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Test {
    return new Contract(address, _abi, signerOrProvider) as Test;
  }
}