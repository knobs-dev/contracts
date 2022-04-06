import { expect } from "chai";
import { BigNumber, Contract } from "ethers";
import { ethers } from "hardhat";
import { ArraysToGo, ArraysToGo__factory } from "../typechain-types";

describe("[Arrays To Go] Setup", function () {
  let factory: ArraysToGo__factory;
  let contract: Contract;
  let instance: ArraysToGo;

  before(async function () {
    factory = (await ethers.getContractFactory(
      "ArraysToGo"
    )) as ArraysToGo__factory;
  });

  beforeEach(async function () {
    contract = await factory.deploy();
    instance = (await contract.deployed().catch()) as ArraysToGo;
  });

  it("Should be deployed", async function () {
    expect(instance).not.to.be.undefined;
  });

  it("Should be possible to add an array of 10 elements", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;

    expect(await instance.connect(account0).initialize(name, limit))
      .to.emit(instance, "ArrayInitialized")
      .withArgs(name, limit);
  });

  it("Initialized array should contain the proper info", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;

    expect(await instance.connect(account0).initialize(name, limit))
      .to.emit(instance, "ArrayInitialized")
      .withArgs(name, limit);

    const [arrayCreator, arrayLimit, arrayReady, arrayHash] =
      await instance.getArrayInfo(name);

    expect(arrayReady).to.be.false;
    expect(arrayCreator).to.be.equal(account0.address);
    expect(arrayLimit).to.be.eq(limit);
    expect(arrayHash).to.be.equal(ethers.constants.HashZero);
  });

  it("Should be possible to fill an array with 10 elements", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    await instance.connect(account0).initialize(name, limit);

    expect(await instance.connect(account0).fillArrayByName(name, data))
      .to.emit(instance, "ArrayCompleted")
      .withArgs(name, limit);
  });

  it("Should not be possible to fill an array that does not belong to you", async function () {
    const [account0, account1] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    await instance.connect(account0).initialize(name, limit);

    expect(
      instance.connect(account1).fillArrayByName(name, data)
    ).to.be.revertedWith("Not the creator");
  });

  it("Should be possible to retrieve an array that has been fully completed using 'safeGetArrayByName'", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    await instance.connect(account0).initialize(name, limit);

    expect(await instance.connect(account0).fillArrayByName(name, data))
      .to.emit(instance, "ArrayCompleted")
      .withArgs(name, limit);

    const array = await instance.safeGetArrayByName(name);

    expect(array).to.be.eql(data, "Not the same array");
  });

  it("Should not be possible to retrieve an array that has not been fully completed using 'safeGetArrayByName'", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const partialData = data.slice(0, Math.floor(data.length / 2));

    await instance.connect(account0).initialize(name, limit);

    await instance.connect(account0).fillArrayByName(name, partialData);

    expect(instance.safeGetArrayByName(name)).to.be.revertedWith(
      "Array not yet ready"
    );
  });

  it("Should always be possible to retrieve an array using 'getArrayByName' even if it's not complete", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const partialData = data.slice(0, Math.floor(data.length / 2));

    await instance.connect(account0).initialize(name, limit);

    await instance.connect(account0).fillArrayByName(name, partialData);

    const array = await instance.getArrayByName(name);

    expect(array).to.be.eql(partialData, "Not the same partial array");
  });

  it("Ready state should not be set if the array has been partially filled", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const partialData = data.slice(0, Math.floor(data.length / 2));

    await instance.connect(account0).initialize(name, limit);

    await instance.connect(account0).fillArrayByName(name, partialData);

    const [_arrayCreator, _arrayLimit, arrayReady, _arrayHash] =
      await instance.getArrayInfo(name);

    expect(arrayReady).to.be.false;
  });

  it("Should be possible to fill an array with 10k elements", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTenThousands";
    const limit = 10000;
    const data = Array.from({ length: limit }).map((_, i) => i + 1);
    const hash = ethers.utils.solidityKeccak256(["uint16[]"], [data]);
    const chunkLength = 180;
    const iterations = Math.ceil(limit / chunkLength);

    await instance.connect(account0).initialize(name, limit);

    console.log(`This test is going to make ${iterations} iterations`);
    for (let i = 0; i < iterations; i++) {
      const start = i * chunkLength;
      const end = start + chunkLength;
      console.log(
        `Iteration no. ${i} - from ${start} to ${end < limit ? end : limit}`
      );
      const isLast = i + 1 === iterations;

      if (isLast) {
        expect(
          await instance
            .connect(account0)
            .fillArrayByName(name, data.slice(start, end))
        )
          .to.emit(instance, "ArrayCompleted")
          .withArgs(name, limit);
      } else {
        await instance
          .connect(account0)
          .fillArrayByName(name, data.slice(start, end));
      }
    }
  });

  it("Should be possible to fill an array with 10k elements progressively", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTenThousands";
    const limit = 10000;
    const data = Array.from({ length: limit }).map((_, i) => i + 1);
    const hash = ethers.utils.solidityKeccak256(["uint16[]"], [data]);
    const chunkLength = 180;
    const iterations = Math.ceil(limit / chunkLength);

    await instance.connect(account0).initialize(name, limit);

    console.log(`This test is going to make ${iterations} iterations`);
    for (let i = 0; i < iterations; i++) {
      const start = i * chunkLength;
      const end = start + chunkLength;
      console.log(
        `Iteration no. ${i} - from ${start} to ${end < limit ? end : limit}`
      );
      const isLast = i + 1 === iterations;

      if (isLast) {
        expect(
          await instance
            .connect(account0)
            .fillArrayByNameProgressively(name, chunkLength)
        )
          .to.emit(instance, "ArrayCompleted")
          .withArgs(name, limit);
      } else {
        await instance
          .connect(account0)
          .fillArrayByNameProgressively(name, chunkLength);
      }
    }
  });

  it("Should not contain the hash by default after it has been completely filled", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const chunkLength = 5;
    const iterations = Math.ceil(limit / chunkLength);

    await instance.connect(account0).initialize(name, limit);

    for (let i = 0; i < iterations; i++) {
      await instance
        .connect(account0)
        .fillArrayByNameProgressively(name, chunkLength);
    }

    const [
      _ceratorBefore,
      _limitBefore,
      readyBefore,
      hashBefore,
      _lengthBefore,
    ] = await instance.connect(account0).getArrayInfo(name);

    expect(BigNumber.from(hashBefore)).to.be.eq(0, "Hash already initialized");
    expect(readyBefore).to.be.true;
  });

  it("Should contain the hash of a completely filled array after calling the proper function", async function () {
    const [account0] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;
    const data = Array.from({ length: limit }).map((_, i) => i + 1);
    const hash = ethers.utils.solidityKeccak256(["uint16[]"], [data]);
    const chunkLength = 5;
    const iterations = Math.ceil(limit / chunkLength);

    await instance.connect(account0).initialize(name, limit);

    for (let i = 0; i < iterations; i++) {
      await instance
        .connect(account0)
        .fillArrayByNameProgressively(name, chunkLength);
    }

    const [
      _ceratorBefore,
      _limitBefore,
      readyBefore,
      hashBefore,
      _lengthBefore,
    ] = await instance.connect(account0).getArrayInfo(name);

    expect(BigNumber.from(hashBefore)).to.be.eq(0, "Hash already initialized");
    expect(readyBefore).to.be.true;

    await instance.connect(account0).computeHash(name);

    const [_ceratorAfter, _limitAfter, _readyAfter, hashAfter, _lengthAfter] =
      await instance.connect(account0).getArrayInfo(name);

    expect(hashAfter).to.be.equal(hash, "Hash mismatch");
  });

  it("Only the creator can compute the hash", async function () {
    const [account0, account1] = await ethers.getSigners();

    const name = "OneToTen";
    const limit = 10;

    await instance.connect(account0).initialize(name, limit);

    await instance.connect(account0).fillArrayByNameProgressively(name, limit);

    expect(instance.connect(account1).computeHash(name)).to.be.revertedWith(
      "Not the creator"
    );
  });
});
