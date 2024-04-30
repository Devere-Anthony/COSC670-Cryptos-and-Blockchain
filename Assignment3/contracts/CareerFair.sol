// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CareerFair {

//==============================================================================
// CONTRACT DATA
//==============================================================================
    address owner; 

    struct Attendee {
        address studentAddress;
        bool registered;
        bool active;
    }

    Attendee[] attendees;

//==============================================================================
// ESSENTIAL FUNCTIONS
//==============================================================================
    constructor () {
        owner = msg.sender;
    }

    function enroll() public {
        // check if student if registered
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].studentAddress == msg.sender) {
                console.log("Student already %s registered.", msg.sender);
                return;
            }
        }

        // create an Attendee 
        attendees.push(Attendee({
            studentAddress: msg.sender,
            registered: true,
            active: true
        }));
        
        console.log("Students %s added.", msg.sender);
    }

    function getAttendees() public view {
        console.log("\nCareer Fair Attendees:");
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].registered == true) {
            console.log("%s: %s", i+1, attendees[i].studentAddress);
            }
        }
    }

    function unenroll() public {
        for (uint i = 0; i < attendees.length; i++) {
            if (attendees[i].studentAddress == msg.sender) {
                attendees[i].registered = false;
                console.log("\nStudent %s unenrolled.", msg.sender);
            }
        }
    }



//==============================================================================
// HELPER FUNCTIONS
//==============================================================================
  modifier onlyOwner() {
        /** Function modifier that allows only the owner to execute function. */
        require(msg.sender == owner);
        _;
    }
}