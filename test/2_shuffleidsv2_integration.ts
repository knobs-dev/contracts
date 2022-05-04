import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import {
  ShuffleIdsV2IntegrationTest__factory,
  ShuffleIdsV2IntegrationTest,
} from "../typechain-types";

describe("[Shuffled Ids] Integration", function () {
  let testFactory: ShuffleIdsV2IntegrationTest__factory;
  let testContract: Contract;
  let testInstance: ShuffleIdsV2IntegrationTest;

  before(async function () {
    testFactory = (await ethers.getContractFactory(
      "ShuffleIdsV2IntegrationTest"
    )) as ShuffleIdsV2IntegrationTest__factory;
  });

  it("Should be possible to mint with non-consecutive ids", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTenK";
    const limit = 100;
    const data = Array.from({ length: limit }).map((_, i) => i + 1);

    testContract = await testFactory.deploy(limit);
    testInstance = (await testContract
      .deployed()
      .catch()) as ShuffleIdsV2IntegrationTest;

    const randomIds = [];

    for (let i = 0; i < data.length; i++) {
      await testInstance.mint();
      const id = await testInstance.id();

      if (i % 10 === 0) {
        console.log(`Iteration ${i}`);
      }

      randomIds.push(await id.toNumber());
    }

    expect(randomIds).not.to.be.eql(data, "Arrays are the same");
    expect(new Set(randomIds).size).to.be.equal(
      data.length,
      "Not the same size. Duplicated values!"
    );
  });
});
