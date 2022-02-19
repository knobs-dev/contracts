<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/knobs-dev/arrays-to-go">
    <img src="images/ArraysToGo.png" alt="Logo" width="160">
  </a>

  <h3 align="center">Arrays To Go</h3>

  <p align="center">
    Community created, ready to go arrays on the Ethereum network
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project 🎙️

Filling very long array of numbers on the ethereum network may be too expensive, moreover if you have to do it multiple times. That's why we thought: *"It's literally a waste of computation. Why don't we fill them once and copy the content every time we need it?"*

We know, it may looks like there is no real application for that kind of smart contract, but in fact we have built it for a specific purpose 😅.

There is an easy but clever way to mint NFTs with not sequential ids, but guess what? it requires to have an array with all the possible values. So, here is where this contract come in place 🚀

```solidity
contract MyAwesome10kNFTs {
    uint256[] tokenIds;
    constructor() {
        tokenIds = IArraysToGo(0xfd3e...).safeGetArrayByName("OneToTenK");
    }
}
```

Can't you see the advantages? Filled with just one line of code 💪

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With 

Hardhat + Solidity + Typescript + Solidity Coverage

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Install the npm package or copy our contract interface
* npm
  ```sh
  npm install @knobs/arraystogo@latest
  ```

### Installation

Import our interface

```solidity
import "@knobs/arraystogo/IArraysToGo.sol";
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage 🍽️

Clone an existing array

```solidity
    uint256[] oneToTenKArray = IArraysToGo(0xfd3e...).safeGetArrayByName("OneToTenK");
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap 🛣️

- [ ] Release on Ropsten testnet
- [ ] Release on Polygon mumbai testnet
- [ ] Release on Ethereum mainnet
- [ ] Release on Polygon mainnet
- [ ] Fill the OneToTenK array

See the [open issues](https://github.com/knobs-dev/arrays-to-go/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing 🧑‍🔧

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License ©️

Distributed under the MIT License. See the `LICENSE` file for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact 📬

Your Name - [@your_twitter](https://twitter.com/KnobsBlockchain) - info@knobs.it

Project Link: [https://github.com/knobs-dev/arrays-to-go](https://github.com/knobs-dev/arrays-to-go)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Coffee Cup Vectors by Vecteezy](https://www.vecteezy.com/free-vector/coffee-cup)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/knobs-dev/arrays-to-go.svg?style=for-the-badge
[contributors-url]: https://github.com/knobs-dev/arrays-to-go/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/knobs-dev/arrays-to-go.svg?style=for-the-badge
[forks-url]: https://github.com/knobs-dev/arrays-to-go/network/members
[stars-shield]: https://img.shields.io/github/stars/knobs-dev/arrays-to-go.svg?style=for-the-badge
[stars-url]: https://github.com/knobs-dev/arrays-to-go/stargazers
[issues-shield]: https://img.shields.io/github/issues/knobs-dev/arrays-to-go.svg?style=for-the-badge
[issues-url]: https://github.com/knobs-dev/arrays-to-go/issues
[license-shield]: https://img.shields.io/github/license/knobs-dev/arrays-to-go.svg?style=for-the-badge
[license-url]: https://github.com/knobs-dev/arrays-to-go/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/knobs-blockchain/



## For developers 👨‍💻
###  Run locally

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

### Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

### Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).