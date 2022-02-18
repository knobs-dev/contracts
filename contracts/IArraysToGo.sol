// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.11;

interface IArraysToGo {
    function initialize(string memory arrayName, uint256 limit) external;

    function fillArrayByName(string memory arrayName, uint256[] memory data) external;

    function fillArrayByNameProgressively(string memory arrayName, uint256 numberOfElements) external;

    function getArrayByName(string memory arrayName) external view returns (uint256[] memory);

    function safeGetArrayByName(string memory arrayName) external view returns (uint256[] memory);

    function getArrayInfo(string memory arrayName) external view returns(address, uint256, bool, bytes32, uint256);
}