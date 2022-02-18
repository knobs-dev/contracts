// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.11;

import "./IArraysToGo.sol";

contract Test {

    uint256[] public tokenIds;

    constructor(address arrayToGoAddress, string memory arrayName) {
        tokenIds = IArraysToGo(arrayToGoAddress).safeGetArrayByName(arrayName);
    }

    function getTokenIds() public view returns (uint256[] memory) {
        return tokenIds;
    }
}