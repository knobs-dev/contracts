import { task } from "hardhat/config";
import { ArraysToGo } from "../typechain-types";

task("atg/fill_progressively", "Fills the array progressively")
  .addParam("contract", "ArraysToGo contract address")
  .addParam(
    "identifier",
    "Identifier of the array that you are going to fill (eg. OneToTen)"
  )
  .addParam("from", "Bottom limit (included)")
  .addParam("to", "Upper limit (included)")
  .addParam("chunklength", "Length of the chunks to send")
  .setAction(async (taskArgs, hre) => {
    console.log("[ATG] Contract Address:", taskArgs.contract);
    console.log("[ATG] Identifier:", taskArgs.identifier);
    console.log("[ATG] Bottom limit:", taskArgs.from);
    console.log("[ATG] Upper limit:", taskArgs.to);
    console.log("[ATG] Chunk length:", taskArgs.chunklength);

    const limit = taskArgs.to - taskArgs.from + 1;

    console.log("[ATG] Number of elements:", limit);

    const data = Array.from({ length: limit }).map((_, i) => i + 1);
    const hash = hre.ethers.utils.solidityKeccak256(["uint256[]"], [data]);
    const chunkLength = parseInt(taskArgs.chunklength);
    const iterations = Math.ceil(limit / chunkLength);

    console.log(`[ATG] Array hash: ${hash}`);

    const contract = (await hre.ethers.getContractAt(
      "ArraysToGo",
      taskArgs.contract
    )) as ArraysToGo;

    const instance = await contract.deployed();

    console.log(
      `[ATG] Successfully connected to ${instance.address} on the selected network`
    );

    const arrayInfo = await instance.getArrayInfo(taskArgs.identifier);

    const arrayExist = arrayInfo[0] !== hre.ethers.constants.AddressZero;
    const arrayReady = arrayInfo[2];
    const arrayHash = arrayInfo[3];

    console.log(`[ATG] Array hash from contract: ${arrayHash}`);

    if (!arrayExist) {
      await instance.initialize(taskArgs.identifier, limit);
      console.log(
        `[ATG] Array ${taskArgs.identifier} with limit ${limit} has been created`
      );
    }

    if (arrayReady) {
      console.log(`[ATG] Array ${taskArgs.identifier} has already been filled`);
      return;
    }

    console.log(
      `[ATG] We are going to make ${iterations} iterations to fill the array`
    );

    for (let i = 0; i < iterations; i++) {
      const start = i * chunkLength;
      const end = start + chunkLength;
      const isLast = i + 1 === iterations;

      console.log(
        `[ATG] Iteration no. ${i} - from ${start} to ${
          end < limit ? end : limit
        }`
      );

      if (isLast) {
        await instance.fillArrayByNameProgressively(
          taskArgs.identifier,
          chunkLength
        );
      } else {
        await instance.fillArrayByNameProgressively(
          taskArgs.identifier,
          chunkLength
        );
      }
    }
  });
