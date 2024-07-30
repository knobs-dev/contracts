// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "../libraries/ShuffledIds.sol";

contract ShuffledIdsLibIntegrationTest {
    using ShuffledIds for ShuffledIds.Shuffler;

    uint256 public id;

    ShuffledIds.Shuffler public shuffler1;
    ShuffledIds.Shuffler public shuffler2;

    constructor(
        uint256 s1min,
        uint256 s1max,
        uint256 s2min,
        uint256 s2max
    ) {
        shuffler1.initialize(s1min, s1max);
        shuffler2.initialize(s2min, s2max);
    }

    function mint1() public {
        id = shuffler1.popRandomId();
    }

    function mint2() public {
        id = shuffler2.popRandomId();
    }
}
