// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "./IArraysToGo.sol";

contract IntegrationTest {
    uint256[] public tokenIds;

    constructor(address arrayToGoAddress, string memory arrayName) {
        tokenIds = IArraysToGo(arrayToGoAddress).safeGetArrayByName(arrayName);
    }

    function getTokenIds() public view returns (uint256[] memory) {
        return tokenIds;
    }
}
