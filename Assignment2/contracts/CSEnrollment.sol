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

    
    constructor (address _owner) {
        owner = _owner;
    }

    // function register() 
}