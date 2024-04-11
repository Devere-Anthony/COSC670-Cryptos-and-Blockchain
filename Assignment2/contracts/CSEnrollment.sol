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
        Level courseLevel;
        uint8 numCredits;
        uint8 capacity;
        uint numEnrolled;
        address[] courseRoster;
    }

    Course[] coursesOffered;    // dynamic array to store courses in CS dept.

    constructor (address _owner) {
        owner = _owner;
    }

    // function register()
}