// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ShuffledIdsV2 {
    mapping(uint256 => uint256) swapMap;

    uint256 private remaining;

    uint256 private nonce;

    constructor(uint256 maxIds) {
        remaining = maxIds;
    }

    modifier ifNotEmpty() {
        require(remaining > 0, "No more ids left");
        _;
    }

    function decrement() internal {
        uint256 value = remaining;
        require(value > 0, "Counter: decrement overflow");
        unchecked {
            remaining = value - 1;
        }
    }

    function swap(uint256 index) internal {
        decrement();

        if (swapMap[remaining] == 0) {
            swapMap[index] = remaining;
        } else {
            swapMap[index] = swapMap[remaining];
        }
    }

    function pop(uint256 randomnumber) internal returns (uint256) {
        uint256 temp = swapMap[randomnumber];

        if (temp == 0) {
            swap(randomnumber);
            return randomnumber + 1;
        } else {
            swap(randomnumber);
            return temp + 1;
        }
    }

    function popRandomId() internal ifNotEmpty returns (uint256) {
        uint256 randomnumber = uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    msg.sender,
                    blockhash(block.number - 1),
                    nonce
                )
            )
        ) % remaining;

        nonce++;

        return pop(randomnumber);
    }

    function getRemaining() internal view returns (uint256) {
        return remaining;
    }
}
