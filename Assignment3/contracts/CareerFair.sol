// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CareerFair {
    address owner;

    struct Attendee {
        address studentAddress;
        bool registered;
        bool active;
    }

    Attendee[] attendees;
    string[] companies;

    constructor() {
        owner = msg.sender;
    }

    function enroll() public {
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].studentAddress == msg.sender) {
                console.log("Student already %s registered.", msg.sender);
                return;
            }
        }

        attendees.push(
            Attendee({
                studentAddress: msg.sender,
                registered: true,
                active: true
            })
        );

        console.log("Students %s added.", msg.sender);
    }

    function getAttendees() public view {
        console.log("\nCareer Fair Attendees:");
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].registered == true) {
                console.log("%s: %s", i + 1, attendees[i].studentAddress);
            }
        }
    }

    function unenroll() public {
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].studentAddress == msg.sender && attendees[i].registered == true) {
                attendees[i].registered = false;
                console.log("\nStudent %s unenrolled.", msg.sender);
            }
        }
    }

    function add(string memory companyName) public onlyOwner {
        // add a company to the thing if it's not already in there
        for (uint i = 0; i < companies.length; i++) {
            if (compareStrings(companies[i], companyName)) {
                console.log("%s already added.", companyName);
                return;
            }
        }
        companies.push(companyName);
        console.log("%s added.", companyName);
    }

    function getCompanies() public view {
        console.log("\nCompanies:");
        for (uint i = 0; i < companies.length; i++) {
            console.log("%s: %s", i + 1, companies[i]);
        }
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function compareStrings(string memory _a, string memory _b) private pure returns (bool) {
        if (keccak256(abi.encodePacked(_a)) == keccak256(abi.encodePacked(_b))) {
            return true;
        } else {
            return false;
        }
    }
}