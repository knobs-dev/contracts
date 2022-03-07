/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShuffledIds, ShuffledIdsInterface } from "../ShuffledIds";

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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161057a38038061057a83398181016040528101906100329190610313565b8173ffffffffffffffffffffffffffffffffffffffff1662693599826040518263ffffffff1660e01b815260040161006a91906103c4565b600060405180830381865afa158015610087573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906100b091906104e4565b600090805190602001906100c59291906100cd565b50505061052d565b828054828255906000526020600020908101928215610109579160200282015b828111156101085782518255916020019190600101906100ed565b5b509050610116919061011a565b5090565b5b8082111561013357600081600090555060010161011b565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101768261014b565b9050919050565b6101868161016b565b811461019157600080fd5b50565b6000815190506101a38161017d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6101fc826101b3565b810181811067ffffffffffffffff8211171561021b5761021a6101c4565b5b80604052505050565b600061022e610137565b905061023a82826101f3565b919050565b600067ffffffffffffffff82111561025a576102596101c4565b5b610263826101b3565b9050602081019050919050565b60005b8381101561028e578082015181840152602081019050610273565b8381111561029d576000848401525b50505050565b60006102b66102b18461023f565b610224565b9050828152602081018484840111156102d2576102d16101ae565b5b6102dd848285610270565b509392505050565b600082601f8301126102fa576102f96101a9565b5b815161030a8482602086016102a3565b91505092915050565b6000806040838503121561032a57610329610141565b5b600061033885828601610194565b925050602083015167ffffffffffffffff81111561035957610358610146565b5b610365858286016102e5565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60006103968261036f565b6103a0818561037a565b93506103b0818560208601610270565b6103b9816101b3565b840191505092915050565b600060208201905081810360008301526103de818461038b565b905092915050565b600067ffffffffffffffff821115610401576104006101c4565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b61042a81610417565b811461043557600080fd5b50565b60008151905061044781610421565b92915050565b600061046061045b846103e6565b610224565b9050808382526020820190506020840283018581111561048357610482610412565b5b835b818110156104ac57806104988882610438565b845260208401935050602081019050610485565b5050509392505050565b600082601f8301126104cb576104ca6101a9565b5b81516104db84826020860161044d565b91505092915050565b6000602082840312156104fa576104f9610141565b5b600082015167ffffffffffffffff81111561051857610517610146565b5b610524848285016104b6565b91505092915050565b603f8061053b6000396000f3fe6080604052600080fdfea264697066735822122042d2ba26d5b54383f49554a45d48fe657f4e5730d68d250fccfdfa7eee559a9164736f6c634300080c0033";

type ShuffledIdsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShuffledIdsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShuffledIds__factory extends ContractFactory {
  constructor(...args: ShuffledIdsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShuffledIds";
  }

  deploy(
    arrayToGoAddress: string,
    arrayName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShuffledIds> {
    return super.deploy(
      arrayToGoAddress,
      arrayName,
      overrides || {}
    ) as Promise<ShuffledIds>;
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
  attach(address: string): ShuffledIds {
    return super.attach(address) as ShuffledIds;
  }
  connect(signer: Signer): ShuffledIds__factory {
    return super.connect(signer) as ShuffledIds__factory;
  }
  static readonly contractName: "ShuffledIds";
  public readonly contractName: "ShuffledIds";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShuffledIdsInterface {
    return new utils.Interface(_abi) as ShuffledIdsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShuffledIds {
    return new Contract(address, _abi, signerOrProvider) as ShuffledIds;
  }
}
