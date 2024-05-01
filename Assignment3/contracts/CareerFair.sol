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
    address[] returnedAddresses;

    constructor() {
        owner = msg.sender;
    }

    function enroll() public {
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].studentAddress == msg.sender) {
                require(attendees[i].registered == false, "student already enrolled");
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
        updateAttendees();
    }


    function updateAttendees() internal {
        delete returnedAddresses;
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].registered == true) {
                returnedAddresses.push(attendees[i].studentAddress);
            }
        }
    }

    function getAttendees() public view returns (address[] memory) {
        return returnedAddresses;
    }

    function unenroll() public {
        require(attendees.length > 0, "No students enrolled.");

        bool exists;

        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].studentAddress == msg.sender && attendees[i].registered == true) {
                exists = true;
                // require(attendees[i].registered == true, "Student not already enrolled.");
                attendees[i].registered = false;
                console.log("\nStudent %s unenrolled.", msg.sender);
            } 
        }

        require(exists, "Student doesn't exist or isn't registered already.");

        updateAttendees();
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

    function getCompanies() public view returns(string[] memory) {
        console.log("\nCompanies:");
        for (uint i = 0; i < companies.length; i++) {
            console.log("%s: %s", i + 1, companies[i]);
        }

        return companies;
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