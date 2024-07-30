// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../libraries/MerkleProofIndexed.sol";

contract MerkleProofIndexedIntegrationTest {
    bool public verified;
    event VerificationResult(bool result);

    function verifyProof(
        bytes32[] memory proof,
        bytes32 root,
        bytes32 leaf,
        uint256 leafIndex
    ) public {
        verified = MerkleProofIndexed.verify(proof, root, leaf, leafIndex);

        emit VerificationResult(verified);
    }
}
