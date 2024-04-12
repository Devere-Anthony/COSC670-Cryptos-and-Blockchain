// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Hash {

    // constructor(string memory _name) {
    //     bytes32 a = keccak256(abi.encodePacked(_name));
    //     console.log("%s:", _name);
    //     console.logBytes32(a);
    // }

    constructor(uint courseNumber) {
        bytes32 a = keccak256(abi.encodePacked(courseNumber));
        // console.log("%s:", _name);
        console.logBytes32(a);
    }

    string[] strings = ["a", "b", "c"];

    function getStrings() public returns(string[] memory) {
        return strings;
    }
}
