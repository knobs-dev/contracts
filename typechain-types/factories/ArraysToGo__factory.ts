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
  "0x608060405234801561001057600080fd5b506128fe806100206000396000f3fe608060405234801561001057600080fd5b50600436106100615760003560e01c8062693599146100665780631a752576146100965780634b020eae146100b25780638beaf7d7146100e25780639d2744a3146100fe578063ddde5cff1461011a575b600080fd5b610080600480360381019061007b9190611f56565b61014e565b60405161008d9190612067565b60405180910390f35b6100b060048036038101906100ab91906120b5565b6103c3565b005b6100cc60048036038101906100c79190611f56565b610ecc565b6040516100d99190612067565b60405180910390f35b6100fc60048036038101906100f791906120b5565b610fc9565b005b610118600480360381019061011391906121d9565b6114ae565b005b610134600480360381019061012f9190611f56565b611c80565b6040516101459594939291906122d5565b60405180910390f35b60608161017d7fc203f3cde36b7d3f138ab17d4f554d84f90aa9344ab337739cb3e31ef301e95e60001b611df9565b6101a97fd9b2afeb95d543cdd0c59188c9fac562fc6dec1b36c82ac2ce9913d149252dc560001b611df9565b6101d57f68969de56067d706a7ecb26698893b8665e567f3c3e31a46b4c814b6b0c522b960001b611df9565b6102017f822c30538179c53fe0c9079cd7fad0043ddb47acaf5ca3e6ae66b2fe4cd6858260001b611df9565b60008160405161021191906123a2565b908152602001604051809103902060020160009054906101000a900460ff1661026f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026690612416565b60405180910390fd5b61029b7f40a64f62171f87a7a7e74c966b2919f63e92b125cbb5b9abeb2ec03bf1c5fe4160001b611df9565b6102c77f4de51d96d602099ff0d36e1dd77ba0f7ecc884337dcf4a9d53bb39fff3f0053360001b611df9565b6102f37fb52baa76f418833c201454ef2cfc31669faef8fdbcaee7d793fbc0a38ed5f52f60001b611df9565b61031f7f2bdf436cd50950c2a29e39da422efa74c70ea7173a24628b382949c9b170d05c60001b611df9565b61034b7f53e996f4596e79f4579fe506a1ef776ed80c4a121abe9dfc5cd307b2a2661e9360001b611df9565b60008360405161035b91906123a2565b90815260200160405180910390206003018054806020026020016040519081016040528092919081815260200182805480156103b657602002820191906000526020600020905b8154815260200190600101908083116103a2575b5050505050915050919050565b816103f07f6c93c2bd613ea837cd84fbad0649a71f1afc329e01cf029db8a93d0ed989394a60001b611df9565b61041c7ff3cf494f5e5dde58430eed40ce22787c349c584c4c97ec2737c035ceb380285060001b611df9565b6104487fd824cc31af151aabed517f2e8187c312b0fd773ae0636bba2ed5c907b847070260001b611df9565b6104747f1eddfd56983376891bab47333318d6bc5d92f2062a5f58c7486c9e3a718501ec60001b611df9565b3373ffffffffffffffffffffffffffffffffffffffff1660008260405161049b91906123a2565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051a90612482565b60405180910390fd5b61054f7f4af42447ae37b2fca9bfea7ad29ddff2f04c8e7e9b5d64a32ce1fed762e40ec760001b611df9565b61057b7f6606e047816f4e5d35eaacfb443213ad3f9ab71288a516d103cfaed4d02b0e3860001b611df9565b826105a87f0c308959c48ae4bd4130ae723b81a13aa7e2dbbe23bc920d0b0263f33f51977a60001b611df9565b6105d47f26b337bbafc5d8ade25cce4ecabb33c7382a6fb8a39b457ed7ba812530f1dc4560001b611df9565b6106007fad661cfd07cec91b07015c39be81526070d6cde8f660a85a80cb40cc4038848c60001b611df9565b61062c7fcfb07df874c6625d705fc15c02271db4cea038cebc6a5d44934dff88fcb44e8b60001b611df9565b6000151560008260405161064091906123a2565b908152602001604051809103902060020160009054906101000a900460ff161515146106a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610698906124ee565b60405180910390fd5b6106cd7fea97dbaefef6eac4516106f01df12edb8fa5e4321cde189047efe2b70e55064d60001b611df9565b6106f97f287d20444b9f7ba0fd6f4cf8ae9353866fddabd370c62e2d12164e522e709df960001b611df9565b6107257f930a1592902e6c79a29d4bbe1c1a674932193eecdc387703294eb07aa912f1aa60001b611df9565b6107517f65fee114d891237478b68b755c5e436fdb2b56e8eab32e8fcd5e7c2e9d47c74e60001b611df9565b61077d7fd4737279bb81f6b1f9e45355caf0209829edee05e451aa9a20fad5987751bc3360001b611df9565b6000808560405161078e91906123a2565b90815260200160405180910390206003018054905090506107d17f2596b1051913da189518d150442db6d19ffdf7ca5c437640541e6ed488c2b58960001b611df9565b6107fd7f9461524359a96c7eddc208ffb20613c5222043c6c9f7cc54032783462c81d71360001b611df9565b6000808660405161080e91906123a2565b90815260200160405180910390206003018054905060008760405161083391906123a2565b90815260200160405180910390206001015461084f919061253d565b905061087d7fe11c494a50e18712bebd90636673c7bdfc48f188b7b9a30140dfcfb3ab15f0b560001b611df9565b6108a97fdff1e49ac45c459bb2dd1f45e73d2ca9af56a5773629f2a38283515cc143a7d860001b611df9565b60006108d77f177e3cc5540b1a2a761cc1797f9dc0b944e91d66030db87dd098a5aef2a3e2ed60001b611df9565b6109037fa1bf2505c08e1f5cc34b504755b8cc200c2f83a31d21f617c49d959f6e2aed9160001b611df9565b85821115610997576109377fdc7f3f83e5f3f146097928f16b56f0a9bca87db1417d1225384a6e4b61c1e84960001b611df9565b6109637fa3692a6e992dbe4335cb00f2c08480fa694b669564ee9b5542e6fc04458648c760001b611df9565b61098f7f5e74ea5cec143304abd78d860c6e2def23d64de32c0f79658d425eda3e5fa8ec60001b611df9565b859050610a1f565b6109c37fc532e5ebb1e66d6876df250d6fe1a9abe7975abcfb6aea8fc5f079c90fb1ec1060001b611df9565b6109ef7fc201ec1d7b1134a9dfd3cf58e98e746f3432f3853586682ee316e970b5f6539e60001b611df9565b610a1b7f8a5b6685da57ddcebce310d8813a4aaeb4410ce6009b8a1e3b8dfcaf1961139b60001b611df9565b8190505b610a4b7fcbe95ad943e7b2531e27c33b62b8ab2d2992656fdfd4311e74b9f184b6e8854860001b611df9565b610a777fbc1c630c27452e700bd2741749482353125fc0efd571a8916702d533e72ef22660001b611df9565b60008390505b8184610a899190612571565b811015610b4f57610abc7fa27bde19b19131e7a994fab0e67897c04e5726e257740fd2b8bba7131169b8be60001b611df9565b610ae87fb385bc04e2f6fd2b0b31ff3782d9a1b808e32cdb40b80fddb1d32f3dc6bba04060001b611df9565b600088604051610af891906123a2565b9081526020016040518091039020600301600182610b169190612571565b90806001815401808255809150506001900390600052602060002001600090919091909150558080610b47906125c7565b915050610a7d565b50610b7c7fba24d173523bda704d0a4e50f7b4fd1a73efce425ba1321a8adf1b6c423641d960001b611df9565b610ba87f9f39362364d88e7cf8507ae9ba49073ddef6c4bf3429ece875a8a7e7c29dadef60001b611df9565b600087604051610bb891906123a2565b908152602001604051809103902060010154600088604051610bda91906123a2565b9081526020016040518091039020600301805490501415610e9657610c217f389189397866445c18d54a69295d4b11823e8ba7873f56f652bb71239a83c8ab60001b611df9565b610c4d7fcbc69bb5cb522232a15850b92f4f331e094399cc8716f3f15448899ab5dba65060001b611df9565b610c797f10fe5a1d7ab3f1a7fc859d5370e4d4e3660334840b310d1c7fd36c5891ad8dff60001b611df9565b60008088604051610c8a91906123a2565b9081526020016040518091039020600301604051602001610cab9190612718565b604051602081830303815290604052805190602001209050610cef7f1c7757bea80f2b61c882c5b8bd4ce72fd8f6b20a5663301b0fbb13e25f00b91060001b611df9565b610d1b7f5bfe2808d0e7e3bdda736804a30c38bb681e046b840d3cdab7db08779ff2fbcf60001b611df9565b6001600089604051610d2d91906123a2565b908152602001604051809103902060020160006101000a81548160ff021916908315150217905550610d817f71f32789ef17ab1cc5753d6cac78859261eeee9831ff72d05e9b228695ac581760001b611df9565b610dad7f72aa3faeaf66d0d5688d35771de4838adc46a5ab10ed1af9287e841313a8789d60001b611df9565b80600089604051610dbe91906123a2565b908152602001604051809103902060040181905550610dff7f945ccfc7cd015c2d8ebd8a5e82506f9d235a4fdae1af9e604354588b7500e84360001b611df9565b610e2b7f4faa1de44673366afcdf62c5e97798550d8f85319f3e5a4831a6e35e4a1ce1c460001b611df9565b80600089604051610e3c91906123a2565b90815260200160405180910390206001015489604051610e5c91906123a2565b60405180910390207feabd90ad582421a7db1682e295ade8af670a41355753f0bf87d5d480cc8986d360405160405180910390a450610ec3565b610ec27f243901eb027fdb80d79d2dac0129a46a19f502ebc3f0a565c666f35b35c9739660001b611df9565b5b50505050505050565b6060610efa7f096a45162492db5d35a0b7d64bd52cbc325236fcd678d9dccd8bd866fa3aa7f560001b611df9565b610f267f312c638b0a60045c52320507e6aaa79712a4537a19b4d7abd95914f2f3d897f860001b611df9565b610f527f41127ebc6a127e81c71120c24b425dae81d1dcc81d12bce768851fba5629a33760001b611df9565b600082604051610f6291906123a2565b9081526020016040518091039020600301805480602002602001604051908101604052809291908181526020018280548015610fbd57602002820191906000526020600020905b815481526020019060010190808311610fa9575b50505050509050919050565b610ff57fa667b6f440b3c6c94abcdc9f2c50cc547915626ed58d9907da40a9fa6fd98f8160001b611df9565b6110217f3cc2b566f0542deb53a39153fd804eb3c3e597148640c5d219a90aa084e3610b60001b611df9565b61104d7ff03f7475fe84dc7f2f51b72da104a21786caf2407b6c65a98ad92d721a0c01e860001b611df9565b6110797fde70c3decdbc09139f5ec06ecee4cd7b551bcb65666556f6c936f3f5bb26354960001b611df9565b600081116110bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b3906127a1565b60405180910390fd5b6110e87f24b2cf98879a7c2b419f33661420f6751c830c952ac9cb845bcd834b19c562f260001b611df9565b6111147f35f1ce999e0ec8589117f6cd556509f1b1bd6c5a0d19243f3620274a2f85118f60001b611df9565b6111407f8184cbc93e42d956cce9deaf66e60251437d006f9f4baf6639a4e6b81c877be960001b611df9565b61116c7f965fb6d49fa2b74cba44f14d41e1f2ceb3cb0f7b15e1ee99b26b00b2fb0c160d60001b611df9565b600073ffffffffffffffffffffffffffffffffffffffff1660008360405161119491906123a2565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461121c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112139061280d565b60405180910390fd5b6112487f937262c77463b95cc14b153c23f9735d40bd0135d8a9682a6b6a44e3ed527a3060001b611df9565b6112747f41c612f6d348ccef94c2777480d46c9d786acf66780bf0404d7aab453019537260001b611df9565b6112a07fe8c744d211e8d17d94730104c1fad62a04c74823417f48cdc200a5ca9a5de5d260001b611df9565b336000836040516112b191906123a2565b908152602001604051809103902060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061132c7f2af229d60455b9d3c4a13717babead3113b2c533fc5703c6f0eff1ad20b17f2f60001b611df9565b6113587ff69345ee8857ae10131588249c2e1e9b070a21a039dedbfe3535fe72d20ebdd160001b611df9565b8060008360405161136991906123a2565b9081526020016040518091039020600101819055506113aa7f14dd7003534030d4ad639e70783c08add4966a32de6940d9b52c561fd395b74660001b611df9565b6113d67f891b4a0fe20ab7721df3afbee3a4c7ba2cd668f009d95b50b8312d6cfcbba48260001b611df9565b600080836040516113e791906123a2565b908152602001604051809103902060020160006101000a81548160ff02191690831515021790555061143b7fd2419670540f15d640534e28cceae0344f0004ff84001c653d4c40a0d1f1185960001b611df9565b6114677f32a6c3881021b3a9635057339750cdd3ae87a3fb686620beeeec1b02f38b5f0e60001b611df9565b808260405161147691906123a2565b60405180910390207fcb1cc995cde5b6a9da8de8c610fba52c6cc297927d0a94e3945c8c2c410097b060405160405180910390a35050565b816114db7f6c93c2bd613ea837cd84fbad0649a71f1afc329e01cf029db8a93d0ed989394a60001b611df9565b6115077ff3cf494f5e5dde58430eed40ce22787c349c584c4c97ec2737c035ceb380285060001b611df9565b6115337fd824cc31af151aabed517f2e8187c312b0fd773ae0636bba2ed5c907b847070260001b611df9565b61155f7f1eddfd56983376891bab47333318d6bc5d92f2062a5f58c7486c9e3a718501ec60001b611df9565b3373ffffffffffffffffffffffffffffffffffffffff1660008260405161158691906123a2565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461160e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160590612482565b60405180910390fd5b61163a7f4af42447ae37b2fca9bfea7ad29ddff2f04c8e7e9b5d64a32ce1fed762e40ec760001b611df9565b6116667f6606e047816f4e5d35eaacfb443213ad3f9ab71288a516d103cfaed4d02b0e3860001b611df9565b6116927f2ffd223761f5be1e9b958fc6cbfd01561f34208a4404316f98b21fcdcd41425560001b611df9565b6116be7f1d72f07d01f8995299545d941e78945ca4eb71205d39520ac6ab5e74a5ea9c2a60001b611df9565b6116ea7f23195166f798c968bc2a230307b18cdb17bbf8ecf484e3b3462f25b367255f4f60001b611df9565b6117167fb8cc67a08b995e87a048e5d89bfe3bd4816e2a1f40d4f262bc81b579cff9bd8260001b611df9565b60008360405161172691906123a2565b90815260200160405180910390206003018054905060008460405161174b91906123a2565b908152602001604051809103902060010154611767919061253d565b825111156117aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a190612879565b60405180910390fd5b6117d67f99eaf73dc823f677e43e6c01237e0fa6140e2b6fdc16811e059e3d017a16bd0760001b611df9565b6118027f424c557764b8cf661fbe9dada06af561bf6b662161ae03053879496215c18ac760001b611df9565b61182e7fb851b46edd63786d85d8dc6fc3158ed23c3ba066b941d2aea77e9b7feab77ec460001b611df9565b60005b8251811015611907576118667fe8588b95fc2b2180c743abaea0d2be088ef0fbd591551c0ddf1d18488875eeb660001b611df9565b6118927f293a6e83be935675c2ba77ff479c205635a55d7c4b25ea88a225b3b4b76a891460001b611df9565b6000846040516118a291906123a2565b90815260200160405180910390206003018382815181106118c6576118c5612899565b5b6020026020010151908060018154018082558091505060019003906000526020600020016000909190919091505580806118ff906125c7565b915050611831565b506119347fb2b85297b34b9bb8a22017e7758c71259508ddb0eb986e63477fc102ef76f18b60001b611df9565b6119607f55bdf3ae1d6ce545ddb95b2fde183d42320b7b9d3db76fd2ae859d05dc77a96a60001b611df9565b60008360405161197091906123a2565b90815260200160405180910390206001015460008460405161199291906123a2565b9081526020016040518091039020600301805490501415611c4e576119d97ff5fd4fd109a8805ce162baae7d4bfb701a34d864706b4cfb3b4645c5e5493c3c60001b611df9565b611a057fb83e12fa671b99d7c7f9806d203ec4f321f6a47b45a5c178ee5298da1383f8ab60001b611df9565b611a317f8808084fb82d94da061e276927e09dc729e404f91fa581a5ed656a5ac88ae29c60001b611df9565b60008084604051611a4291906123a2565b9081526020016040518091039020600301604051602001611a639190612718565b604051602081830303815290604052805190602001209050611aa77f5549ad175d873e4b8dccf92ae0783841b15b0c34769d8597925b085c7edb68f060001b611df9565b611ad37f90439a77a3aa8e850b3fe0b7de7812c42a282b76b0cc7ccb778544bc9d014a3a60001b611df9565b6001600085604051611ae591906123a2565b908152602001604051809103902060020160006101000a81548160ff021916908315150217905550611b397f559cc032d6765f22f2d1055b4113bdf2d051261f836a655b08c269a377bd6f8a60001b611df9565b611b657f4cd246194f09bce4a42c1491d118ff8731f9fed9cce698e6a6cd5e4d4cc2a35860001b611df9565b80600085604051611b7691906123a2565b908152602001604051809103902060040181905550611bb77f608c2959154d240357cd4dda56f4d4070175e20e30df16dcc82302324770bf0b60001b611df9565b611be37f219c77bfcafd5c3a65cf0333db947f1bbc59e63e51edac58010653c7eaa1682560001b611df9565b80600085604051611bf491906123a2565b90815260200160405180910390206001015485604051611c1491906123a2565b60405180910390207feabd90ad582421a7db1682e295ade8af670a41355753f0bf87d5d480cc8986d360405160405180910390a450611c7b565b611c7a7f31f9bbfb6f8d02f983d94f8a9ea78775f89f02e757ed26267910f6cb2efce6d060001b611df9565b5b505050565b6000806000806000611cb47fadda3e08b5fcf16c3bf884d9546d90afae447b7c26d4eeb18d967d192efdc89260001b611df9565b611ce07f807a68fbd3c59fed3cb15d88a282d282e491b642f823078491a71ef0620441c460001b611df9565b611d0c7f690f55d72e896e0ddc28db23a4a888e4b3ecc7c3cd6fa0497ac8d5baac740ab260001b611df9565b600086604051611d1c91906123a2565b908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600087604051611d5e91906123a2565b908152602001604051809103902060010154600088604051611d8091906123a2565b908152602001604051809103902060020160009054906101000a900460ff16600089604051611daf91906123a2565b90815260200160405180910390206004015460008a604051611dd191906123a2565b9081526020016040518091039020600301805490509450945094509450945091939590929450565b50565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e6382611e1a565b810181811067ffffffffffffffff82111715611e8257611e81611e2b565b5b80604052505050565b6000611e95611dfc565b9050611ea18282611e5a565b919050565b600067ffffffffffffffff821115611ec157611ec0611e2b565b5b611eca82611e1a565b9050602081019050919050565b82818337600083830152505050565b6000611ef9611ef484611ea6565b611e8b565b905082815260208101848484011115611f1557611f14611e15565b5b611f20848285611ed7565b509392505050565b600082601f830112611f3d57611f3c611e10565b5b8135611f4d848260208601611ee6565b91505092915050565b600060208284031215611f6c57611f6b611e06565b5b600082013567ffffffffffffffff811115611f8a57611f89611e0b565b5b611f9684828501611f28565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b611fde81611fcb565b82525050565b6000611ff08383611fd5565b60208301905092915050565b6000602082019050919050565b600061201482611f9f565b61201e8185611faa565b935061202983611fbb565b8060005b8381101561205a5781516120418882611fe4565b975061204c83611ffc565b92505060018101905061202d565b5085935050505092915050565b600060208201905081810360008301526120818184612009565b905092915050565b61209281611fcb565b811461209d57600080fd5b50565b6000813590506120af81612089565b92915050565b600080604083850312156120cc576120cb611e06565b5b600083013567ffffffffffffffff8111156120ea576120e9611e0b565b5b6120f685828601611f28565b9250506020612107858286016120a0565b9150509250929050565b600067ffffffffffffffff82111561212c5761212b611e2b565b5b602082029050602081019050919050565b600080fd5b600061215561215084612111565b611e8b565b905080838252602082019050602084028301858111156121785761217761213d565b5b835b818110156121a1578061218d88826120a0565b84526020840193505060208101905061217a565b5050509392505050565b600082601f8301126121c0576121bf611e10565b5b81356121d0848260208601612142565b91505092915050565b600080604083850312156121f0576121ef611e06565b5b600083013567ffffffffffffffff81111561220e5761220d611e0b565b5b61221a85828601611f28565b925050602083013567ffffffffffffffff81111561223b5761223a611e0b565b5b612247858286016121ab565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061227c82612251565b9050919050565b61228c81612271565b82525050565b61229b81611fcb565b82525050565b60008115159050919050565b6122b6816122a1565b82525050565b6000819050919050565b6122cf816122bc565b82525050565b600060a0820190506122ea6000830188612283565b6122f76020830187612292565b61230460408301866122ad565b61231160608301856122c6565b61231e6080830184612292565b9695505050505050565b600081519050919050565b600081905092915050565b60005b8381101561235c578082015181840152602081019050612341565b8381111561236b576000848401525b50505050565b600061237c82612328565b6123868185612333565b935061239681856020860161233e565b80840191505092915050565b60006123ae8284612371565b915081905092915050565b600082825260208201905092915050565b7f4172726179206e6f742079657420726561647900000000000000000000000000600082015250565b60006124006013836123b9565b915061240b826123ca565b602082019050919050565b6000602082019050818103600083015261242f816123f3565b9050919050565b7f4e6f74207468652063726561746f720000000000000000000000000000000000600082015250565b600061246c600f836123b9565b915061247782612436565b602082019050919050565b6000602082019050818103600083015261249b8161245f565b9050919050565b7f4172726179206973207265616479000000000000000000000000000000000000600082015250565b60006124d8600e836123b9565b91506124e3826124a2565b602082019050919050565b60006020820190508181036000830152612507816124cb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061254882611fcb565b915061255383611fcb565b9250828210156125665761256561250e565b5b828203905092915050565b600061257c82611fcb565b915061258783611fcb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156125bc576125bb61250e565b5b828201905092915050565b60006125d282611fcb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156126055761260461250e565b5b600182019050919050565b600081549050919050565b600081905092915050565b60008190508160005260206000209050919050565b61264481611fcb565b82525050565b6000612656838361263b565b60208301905092915050565b60008160001c9050919050565b6000819050919050565b600061268c61268783612662565b61266f565b9050919050565b600061269f8254612679565b9050919050565b6000600182019050919050565b60006126be82612610565b6126c8818561261b565b93506126d383612626565b8060005b8381101561270b576126e882612693565b6126f2888261264a565b97506126fd836126a6565b9250506001810190506126d7565b5085935050505092915050565b600061272482846126b3565b915081905092915050565b7f4e6f7420706f737369626c6520746f207265676973746572206172726179732060008201527f77697468207a65726f20656c656d656e74730000000000000000000000000000602082015250565b600061278b6032836123b9565b91506127968261272f565b604082019050919050565b600060208201905081810360008301526127ba8161277e565b9050919050565b7f4e616d6520616c72656164792074616b656e0000000000000000000000000000600082015250565b60006127f76012836123b9565b9150612802826127c1565b602082019050919050565b60006020820190508181036000830152612826816127ea565b9050919050565b7f546f206d75636820646174610000000000000000000000000000000000000000600082015250565b6000612863600c836123b9565b915061286e8261282d565b602082019050919050565b6000602082019050818103600083015261289281612856565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212208d35bf707515721e2121ae183637420e759e59364e92534e1d3e92c79b50c8ac64736f6c634300080c0033";

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
