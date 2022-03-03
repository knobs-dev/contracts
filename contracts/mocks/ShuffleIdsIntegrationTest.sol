// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "../shuffledIds/ShuffledIds.sol";

contract ShuffleIdsIntegrationTest is ShuffledIds {
    uint256 public id;

    constructor(address arrayToGoAddress, string memory arrayName)
        ShuffledIds(arrayToGoAddress, arrayName)
    {}

    function mint() public {
        id = popRandomId();
    }
}
