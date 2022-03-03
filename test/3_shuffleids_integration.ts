import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import {
  ArraysToGo,
  ArraysToGo__factory,
  ShuffleIdsIntegrationTest__factory,
  ShuffleIdsIntegrationTest,
} from "../typechain-types";

describe("[Shuffled Ids] Integration", function () {
  let arraysToGoFactory: ArraysToGo__factory;
  let arraysToGoContract: Contract;
  let arraysToGoInstance: ArraysToGo;

  let testFactory: ShuffleIdsIntegrationTest__factory;
  let testContract: Contract;
  let testInstance: ShuffleIdsIntegrationTest;

  before(async function () {
    arraysToGoFactory = (await ethers.getContractFactory(
      "ArraysToGo"
    )) as ArraysToGo__factory;

    testFactory = (await ethers.getContractFactory(
      "ShuffleIdsIntegrationTest"
    )) as ShuffleIdsIntegrationTest__factory;
  });

  beforeEach(async function () {
    arraysToGoContract = await arraysToGoFactory.deploy();
    arraysToGoInstance = (await arraysToGoContract
      .deployed()
      .catch()) as ArraysToGo;
  });

  it("Should be deployed", async function () {
    expect(arraysToGoInstance).not.to.be.undefined;
  });

  it("Should be possible to mint with non-consecutive ids", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const hash = ethers.utils.solidityKeccak256(["uint256[]"], [data]);

    await arraysToGoInstance.connect(account0).initialize(name, limit);

    expect(
      await arraysToGoInstance.connect(account0).fillArrayByName(name, data)
    )
      .to.emit(arraysToGoInstance, "ArrayCompleted")
      .withArgs(name, limit, hash);

    testContract = await testFactory.deploy(arraysToGoInstance.address, name);
    testInstance = (await testContract
      .deployed()
      .catch()) as ShuffleIdsIntegrationTest;

    const randomIds = [];

    for (let i = 0; i < data.length; i++) {
      await testInstance.mint();
      const id = await testInstance.id();

      randomIds.push(await id.toNumber());
    }

    expect(randomIds).not.to.be.eql(data);
  });
});
