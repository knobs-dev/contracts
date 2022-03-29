/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShuffleIdsIntegrationTest,
  ShuffleIdsIntegrationTestInterface,
} from "../ShuffleIdsIntegrationTest";

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
    name: "id",
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
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000a9438038062000a94833981810160405281019062000037919062000351565b81818173ffffffffffffffffffffffffffffffffffffffff1662693599826040518263ffffffff1660e01b815260040162000073919062000414565b600060405180830381865afa15801562000091573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190620000bc91906200054e565b60009080519060200190620000d3929190620000de565b50505050506200059f565b8280548282559060005260206000209081019282156200011d579160200282015b828111156200011c578251825591602001919060010190620000ff565b5b5090506200012c919062000130565b5090565b5b808211156200014b57600081600090555060010162000131565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001908262000163565b9050919050565b620001a28162000183565b8114620001ae57600080fd5b50565b600081519050620001c28162000197565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200021d82620001d2565b810181811067ffffffffffffffff821117156200023f576200023e620001e3565b5b80604052505050565b6000620002546200014f565b905062000262828262000212565b919050565b600067ffffffffffffffff821115620002855762000284620001e3565b5b6200029082620001d2565b9050602081019050919050565b60005b83811015620002bd578082015181840152602081019050620002a0565b83811115620002cd576000848401525b50505050565b6000620002ea620002e48462000267565b62000248565b905082815260208101848484011115620003095762000308620001cd565b5b620003168482856200029d565b509392505050565b600082601f830112620003365762000335620001c8565b5b815162000348848260208601620002d3565b91505092915050565b600080604083850312156200036b576200036a62000159565b5b60006200037b85828601620001b1565b925050602083015167ffffffffffffffff8111156200039f576200039e6200015e565b5b620003ad858286016200031e565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000620003e082620003b7565b620003ec8185620003c2565b9350620003fe8185602086016200029d565b6200040981620001d2565b840191505092915050565b60006020820190508181036000830152620004308184620003d3565b905092915050565b600067ffffffffffffffff821115620004565762000455620001e3565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b62000481816200046c565b81146200048d57600080fd5b50565b600081519050620004a18162000476565b92915050565b6000620004be620004b88462000438565b62000248565b90508083825260208201905060208402830185811115620004e457620004e362000467565b5b835b81811015620005115780620004fc888262000490565b845260208401935050602081019050620004e6565b5050509392505050565b600082601f830112620005335762000532620001c8565b5b815162000545848260208601620004a7565b91505092915050565b60006020828403121562000567576200056662000159565b5b600082015167ffffffffffffffff8111156200058857620005876200015e565b5b62000596848285016200051b565b91505092915050565b6104e580620005af6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631249c58b1461003b578063af640d0f14610045575b600080fd5b610043610063565b005b61004d610073565b60405161005a91906101d5565b60405180910390f35b61006b610079565b600281905550565b60025481565b600080600080549050116100c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100b99061024d565b60405180910390fd5b6000808054905042336001546040516020016100e093929190610308565b6040516020818303038152906040528051906020012060001c6101039190610374565b905060008181548110610119576101186103a5565b5b906000526020600020015491506000600160008054905061013a9190610403565b8154811061014b5761014a6103a5565b5b90600052602060002001546000828154811061016a576101696103a5565b5b9060005260206000200181905550600080548061018a57610189610437565b5b60019003818190600052602060002001600090559055600160008154809291906101b390610466565b91905055505090565b6000819050919050565b6101cf816101bc565b82525050565b60006020820190506101ea60008301846101c6565b92915050565b600082825260208201905092915050565b7f4e6f206d6f726520696473206c65667400000000000000000000000000000000600082015250565b60006102376010836101f0565b915061024282610201565b602082019050919050565b600060208201905081810360008301526102668161022a565b9050919050565b6000819050919050565b610288610283826101bc565b61026d565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102b98261028e565b9050919050565b60008160601b9050919050565b60006102d8826102c0565b9050919050565b60006102ea826102cd565b9050919050565b6103026102fd826102ae565b6102df565b82525050565b60006103148286610277565b60208201915061032482856102f1565b6014820191506103348284610277565b602082019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061037f826101bc565b915061038a836101bc565b92508261039a57610399610345565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061040e826101bc565b9150610419836101bc565b92508282101561042c5761042b6103d4565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000610471826101bc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156104a4576104a36103d4565b5b60018201905091905056fea2646970667358221220b2a3c30726ff536c96f4e19ff606eea48ff42e120d2a7b7152d798de1c2c6a9164736f6c634300080c0033";

type ShuffleIdsIntegrationTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShuffleIdsIntegrationTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShuffleIdsIntegrationTest__factory extends ContractFactory {
  constructor(...args: ShuffleIdsIntegrationTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShuffleIdsIntegrationTest";
  }

  deploy(
    arrayToGoAddress: string,
    arrayName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShuffleIdsIntegrationTest> {
    return super.deploy(
      arrayToGoAddress,
      arrayName,
      overrides || {}
    ) as Promise<ShuffleIdsIntegrationTest>;
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
  attach(address: string): ShuffleIdsIntegrationTest {
    return super.attach(address) as ShuffleIdsIntegrationTest;
  }
  connect(signer: Signer): ShuffleIdsIntegrationTest__factory {
    return super.connect(signer) as ShuffleIdsIntegrationTest__factory;
  }
  static readonly contractName: "ShuffleIdsIntegrationTest";
  public readonly contractName: "ShuffleIdsIntegrationTest";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShuffleIdsIntegrationTestInterface {
    return new utils.Interface(_abi) as ShuffleIdsIntegrationTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShuffleIdsIntegrationTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ShuffleIdsIntegrationTest;
  }
}
