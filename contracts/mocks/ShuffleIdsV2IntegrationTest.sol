// SPDX-License-Identifier: AGPLv3
pragma solidity ^0.8.12;

import "../shuffledIds/ShuffledIdsV2.sol";

contract ShuffleIdsV2IntegrationTest is ShuffledIdsV2 {
    uint256 public id;

    constructor(uint256 maxSupply) ShuffledIdsV2(maxSupply) {}

    function mint() public {
        id = popRandomId();
    }
}
