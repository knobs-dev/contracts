// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../arrays/IArraysToGo.sol";

contract ShuffledIds {
    uint256[] private tokenIds;
    uint256 private nonce;

    modifier ifNotEmpty() {
        require(tokenIds.length > 0, "No more ids left");
        _;
    }

    constructor(address arrayToGoAddress, string memory arrayName) {
        tokenIds = IArraysToGo(arrayToGoAddress).safeGetArrayByName(arrayName);
    }

    function popRandomId() internal ifNotEmpty returns (uint256 idToMint) {
        uint256 randomnumber = uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    msg.sender,
                    blockhash(block.number - 1),
                    nonce
                )
            )
        ) % tokenIds.length;

        idToMint = tokenIds[randomnumber];

        tokenIds[randomnumber] = tokenIds[tokenIds.length - 1];

        tokenIds.pop();

        nonce++;
    }

    function getRemaining() internal view returns (uint256) {
        return tokenIds.length;
    }
}
