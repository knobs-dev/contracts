import { expect } from "chai";
import { Contract } from "ethers";
import { solidityKeccak256 } from "ethers/lib/utils";
import { ethers } from "hardhat";
import {
  MerkleProofIndexedIntegrationTest,
  MerkleProofIndexedIntegrationTest__factory,
} from "../typechain-types";
import Addresses from "./mock/16384_addresses.json";
import { MerkleTree } from "merkletreejs";
import { randomBytes } from "crypto";

describe("[MerkleTreeIndexed] Integration", function () {
  let merkleProofIndexedFactory: MerkleProofIndexedIntegrationTest__factory;
  let merkleProofIndexedContract: Contract;
  let merkleProofIndexedInstance: MerkleProofIndexedIntegrationTest;

  before(async function () {
    merkleProofIndexedFactory = (await ethers.getContractFactory(
      "MerkleProofIndexedIntegrationTest"
    )) as MerkleProofIndexedIntegrationTest__factory;
  });

  beforeEach(async function () {
    merkleProofIndexedContract = await merkleProofIndexedFactory.deploy();
    merkleProofIndexedInstance = (await merkleProofIndexedContract
      .deployed()
      .catch()) as MerkleProofIndexedIntegrationTest;
  });

  it("Should be deployed", async function () {
    expect(merkleProofIndexedInstance).not.to.be.undefined;
  });

  it("Should be possible to verify a valid proof", async function () {
    const [account0] = await ethers.getSigners();

    const leafIndex = 1972;

    const leaves = Addresses.map((address) =>
      solidityKeccak256(["address"], [address])
    );

    const tree = new MerkleTree(leaves, (data: Buffer) =>
      solidityKeccak256(
        ["bytes32", "bytes32"],
        [data.slice(0, 32), data.slice(32)]
      )
    );

    const root = tree.getHexRoot();
    const proof = tree.getHexProof(leaves[leafIndex]);

    await merkleProofIndexedInstance
      .connect(account0)
      .verifyProof(proof, root, leaves[leafIndex], leafIndex);

    const verified = await merkleProofIndexedInstance
      .connect(account0)
      .verified();

    expect(verified).to.be.true;
  });

  it("Should not be possible to verify a valid proof using an invalid index", async function () {
    const [account0] = await ethers.getSigners();

    const leafIndex = 1972;
    const invalidIndex = leafIndex + 2;

    const leaves = Addresses.map((address) =>
      solidityKeccak256(["address"], [address])
    );

    const tree = new MerkleTree(leaves, (data: Buffer) =>
      solidityKeccak256(
        ["bytes32", "bytes32"],
        [data.slice(0, 32), data.slice(32)]
      )
    );

    const root = tree.getHexRoot();
    const proof = tree.getHexProof(leaves[leafIndex]);

    await merkleProofIndexedInstance
      .connect(account0)
      .verifyProof(proof, root, leaves[leafIndex], invalidIndex);

    const verified = await merkleProofIndexedInstance
      .connect(account0)
      .verified();

    expect(verified).to.be.false;
  });

  it("Should not be possible to verify an invalid proof", async function () {
    const [account0] = await ethers.getSigners();

    const leafIndex = 1972;
    const invalidIndex = leafIndex + 2;

    const leaves = Addresses.map((address) =>
      solidityKeccak256(["address"], [address])
    );

    const tree = new MerkleTree(leaves, (data: Buffer) =>
      solidityKeccak256(
        ["bytes32", "bytes32"],
        [data.slice(0, 32), data.slice(32)]
      )
    );

    const root = tree.getHexRoot();
    const proof = tree.getHexProof(leaves[leafIndex]);

    const invalidProof = proof.map((el, i) =>
      i % 2 === 0 ? `0x${Buffer.from(randomBytes(32)).toString("hex")}` : el
    );

    await merkleProofIndexedInstance
      .connect(account0)
      .verifyProof(invalidProof, root, leaves[leafIndex], invalidIndex);

    const verified = await merkleProofIndexedInstance
      .connect(account0)
      .verified();

    expect(verified).to.be.false;
  });
});
