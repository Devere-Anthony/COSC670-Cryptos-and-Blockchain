// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// TODO: Figure out wwhat is/how to deal with mappings and if they're beneficial to my use cases

contract CSEnrollment {
    address owner;    // owner of smart contract

    enum Level {
        Undergradute, 
        Graduate
    }  // keep track of student level 

    struct Student {
        /** Represents a student corresponding to a unique EOA */
        address studentId;
        uint8 numCredits;
        Level studentLevel;
    }

    struct Course {
        /** Represents a unique course offering */
        // TODO: Figure out how to generate a uniqe identifier for each course, 
        // look into keccak256 hashing for this that corresponds to courseName which *should*
        // make then unique 
        string courseName;
        bytes3 courseNumber;
        bytes32 courseId;
        Level courseLevel;
        uint8 numCredits;
        uint8 capacity;
        uint numEnrolled;
        address[] courseRoster;
    }

    Course[] courses;

    constructor (address _owner) {
        owner = _owner;
    }

    Course cosc670 = Course({
        courseName: "Special Topics in Computer Science",
        courseNumber: "670", 
        courseId: keccak256("670"),
        courseLevel: Level.Graduate,
        numCredits: 3,
        capacity: 30,
        numEnrolled: 0,
        courseRoster: new address[](0)
    });

    // TODO: Add a helper function that is used to create a new Course...or just 
    // put it all in the add() function?...

    modifier onlyOwner {
        /** Function modifier that allows only the owner to execute function. */
        require (msg.sender == owner);
        _;
    }

    function add() public onlyOwner {
        /** Adds a new course to the enrollment contract
         * Requirements:
         *  - only the owner can add a new course 
         *  - owner can't add a course that already exists (i.e. same courseNumber)
         */

        // Test for ownership
    }

    function destroy() public onlyOwner {
        selfdestruct(payable(owner));
    }

    function tipOwner() public payable {
        /** TU students, send me 💰! Pls n thx */
        (bool success, ) = owner.call{value: msg.value}("");
        require(success);
    }
}