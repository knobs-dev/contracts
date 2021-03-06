/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleProofIndexedIntegrationTest,
  MerkleProofIndexedIntegrationTestInterface,
} from "../MerkleProofIndexedIntegrationTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    name: "VerificationResult",
    type: "event",
  },
  {
    inputs: [],
    name: "verified",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
    ],
    name: "verifyProof",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105db806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634fc36be61461003b578063bbb82d8914610057575b600080fd5b61005560048036038101906100509190610398565b610075565b005b61005f6100e3565b60405161006c9190610436565b60405180910390f35b610081848484846100f4565b6000806101000a81548160ff0219169083151502179055507fc245dfbdf37b342c5a621e8d770f240c63597d37154b774cedbe8f30e72816b560008054906101000a900460ff166040516100d59190610436565b60405180910390a150505050565b60008054906101000a900460ff1681565b600080839050600080600090505b87518110156101af5787818151811061011e5761011d610451565b5b60200260200101519150600060028287901c61013a91906104af565b1415610170578282604051602001610153929190610501565b60405160208183030381529060405280519060200120925061019c565b8183604051602001610183929190610501565b6040516020818303038152906040528051906020012092505b80806101a79061055c565b915050610102565b5085821492505050949350505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610221826101d8565b810181811067ffffffffffffffff821117156102405761023f6101e9565b5b80604052505050565b60006102536101bf565b905061025f8282610218565b919050565b600067ffffffffffffffff82111561027f5761027e6101e9565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6102a881610295565b81146102b357600080fd5b50565b6000813590506102c58161029f565b92915050565b60006102de6102d984610264565b610249565b9050808382526020820190506020840283018581111561030157610300610290565b5b835b8181101561032a578061031688826102b6565b845260208401935050602081019050610303565b5050509392505050565b600082601f830112610349576103486101d3565b5b81356103598482602086016102cb565b91505092915050565b6000819050919050565b61037581610362565b811461038057600080fd5b50565b6000813590506103928161036c565b92915050565b600080600080608085870312156103b2576103b16101c9565b5b600085013567ffffffffffffffff8111156103d0576103cf6101ce565b5b6103dc87828801610334565b94505060206103ed878288016102b6565b93505060406103fe878288016102b6565b925050606061040f87828801610383565b91505092959194509250565b60008115159050919050565b6104308161041b565b82525050565b600060208201905061044b6000830184610427565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006104ba82610362565b91506104c583610362565b9250826104d5576104d4610480565b5b828206905092915050565b6000819050919050565b6104fb6104f682610295565b6104e0565b82525050565b600061050d82856104ea565b60208201915061051d82846104ea565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061056782610362565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561059a5761059961052d565b5b60018201905091905056fea2646970667358221220b1a3cfdcc07aaf90c3ff6d6979769d6f5b69340b88e7922c68713c6b6a29ab5164736f6c634300080c0033";

type MerkleProofIndexedIntegrationTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleProofIndexedIntegrationTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleProofIndexedIntegrationTest__factory extends ContractFactory {
  constructor(...args: MerkleProofIndexedIntegrationTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MerkleProofIndexedIntegrationTest";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleProofIndexedIntegrationTest> {
    return super.deploy(
      overrides || {}
    ) as Promise<MerkleProofIndexedIntegrationTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MerkleProofIndexedIntegrationTest {
    return super.attach(address) as MerkleProofIndexedIntegrationTest;
  }
  connect(signer: Signer): MerkleProofIndexedIntegrationTest__factory {
    return super.connect(signer) as MerkleProofIndexedIntegrationTest__factory;
  }
  static readonly contractName: "MerkleProofIndexedIntegrationTest";
  public readonly contractName: "MerkleProofIndexedIntegrationTest";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleProofIndexedIntegrationTestInterface {
    return new utils.Interface(
      _abi
    ) as MerkleProofIndexedIntegrationTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleProofIndexedIntegrationTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MerkleProofIndexedIntegrationTest;
  }
}
