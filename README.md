<div id="top"></div>

[![NPM][npm-version-shield]][npm-version-url]
[![Build][build-shield]][build-url]
[![MIT License][license-shield]][license-url]

<hr/>

[![Stars][github-stars-shield]][github-stars-url]
[![Twitter][twitter-shield]][twitter-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/knobs-dev/contracts">
    <img src="docs/images/KNOBS.png" alt="Logo" width="160">
  </a>

  <h3 align="center">KNOBS/contracts</h3>

  <p align="center">
    A set of useful contract for building the Web3
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project 🎙️
Contains a set of useful contracts for building web3 applications.

|Project   |Network       |Address                                   |
|----------|--------------|------------------------------------------|
|ArraysToGo|Polygon Mumbai|0x0897feffd8c14ace22c88a6Af64AaDB746b2cE8e|

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
  npm install @knobs/contracts@latest
  ```

### Installation

Import the contract or the interface you need

```solidity
import "@knobs/contracts/[contract_name]/[contract_name].sol";
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ROADMAP -->
## Roadmap 🛣️

- [ ] Release ArraysToGo library
- [ ] Release ShuffledId interface

See the [open issues](https://github.com/knobs-dev/contracts/issues) for a full list of proposed features (and known issues).

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

Your Name - [@KnobsBlockchain](https://twitter.com/KnobsBlockchain) - info@knobs.it

Project Link: [https://github.com/knobs-dev/contracts](https://github.com/knobs-dev/contracts)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Coffee Cup Vectors by Vecteezy](https://www.vecteezy.com/free-vector/coffee-cup)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[npm-version-shield]: https://img.shields.io/npm/v/@knobs/contracts
[npm-version-url]: https://www.npmjs.com/package/@knobs/contracts
[build-shield]: https://img.shields.io/github/workflow/status/knobs-dev/contracts/Test%20and%20Publish
[build-url]: https://www.npmjs.com/package/@knobs/contracts
[github-stars-shield]: https://img.shields.io/github/stars/knobs-dev?style=social
[github-stars-url]: https://github.com/knobs-dev/contracts
[license-shield]: https://img.shields.io/github/license/knobs-dev/contracts
[license-url]: https://github.com/knobs-dev/contracts/blob/master/LICENSE.txt
[twitter-shield]: https://img.shields.io/twitter/follow/KnobsBlockchain?style=social
[twitter-url]: https://twitter.com/KnobsBlockchain



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