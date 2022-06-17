import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import {
  ShuffledIdsLibIntegrationTest,
  ShuffledIdsLibIntegrationTest__factory,
} from "../typechain-types";

describe("[Shuffled Ids] Integration", function () {
  let testFactory: ShuffledIdsLibIntegrationTest__factory;
  let testContract: Contract;
  let testInstance: ShuffledIdsLibIntegrationTest;

  before(async function () {
    testFactory = (await ethers.getContractFactory(
      "ShuffledIdsLibIntegrationTest"
    )) as ShuffledIdsLibIntegrationTest__factory;
  });

  it("Should be possible to mint with non-consecutive ids using separate shufflers", async function () {
    const s1min = 3;
    const s1max = 100;
    const s2min = 120;
    const s2max = 185;

    const data1 = Array.from({ length: s1max - s1min + 1 }).map(
      (_, i) => i + 1
    );
    const data2 = Array.from({ length: s2max - s2min + 1 }).map(
      (_, i) => i + 1
    );

    testContract = await testFactory.deploy(s1min, s1max, s2min, s2max);
    testInstance = (await testContract
      .deployed()
      .catch()) as ShuffledIdsLibIntegrationTest;

    const randomIds1 = [];
    const randomIds2 = [];

    for (let i = 0; i < data1.length; i++) {
      await testInstance.mint1();
      const id = await testInstance.id();

      if (i % 10 === 0) {
        console.log(`Iteration ${i}`);
      }

      randomIds1.push(await id.toNumber());
    }

    for (let i = 0; i < data2.length; i++) {
      await testInstance.mint2();
      const id = await testInstance.id();

      if (i % 10 === 0) {
        console.log(`Iteration ${i}`);
      }

      randomIds2.push(await id.toNumber());
    }

    expect(randomIds1).not.to.be.eql(data1, "Arrays are the same");
    expect(new Set(randomIds1).size).to.be.equal(
      data1.length,
      "Not the same size. Duplicated values!"
    );

    expect(randomIds2).not.to.be.eql(data2, "Arrays are the same");
    expect(new Set(randomIds2).size).to.be.equal(
      data2.length,
      "Not the same size. Duplicated values!"
    );
  });
});
