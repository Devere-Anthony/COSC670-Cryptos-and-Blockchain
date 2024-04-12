// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// TODO: Figure out wwhat is/how to deal with mappings and if they're beneficial to my use cases
import "hardhat/console.sol";

contract CSEnrollment {
    address owner; // owner of smart contract

    enum Level {
        Undergradute,
        Graduate
    } // keep track of student level

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
        // string courseName;
        string courseNumber;
        // bytes32 courseId;
        Level courseLevel;
        uint8 numCredits;
        uint8 capacity;
        uint numEnrolled;
        address[] courseRoster;
    }

    Course[] courses;

    constructor() {
        // TODO: Add the courses that we need during the constructor for the
        // 670, 617, 484, and 431 courses after making sure the courses are 
        // properly added to the contract
        // owner = _owner;

        addCourse("670", Level.Graduate);
        addCourse("617", Level.Graduate);
        addCourse("484", Level.Graduate);
        addCourse("431", Level.Graduate);
        console.log("Number of courses: %s", getCoursesLength());
        printCourses();
    }

    modifier onlyOwner() {
        /** Function modifier that allows only the owner to execute function. */
        require(msg.sender == owner);
        _;
    }

    function addCourse( string memory _courseNumber, Level _courseType) public {
        /** Adds a new course to the enrollment contract
         * Requirements:
         *  - only the owner can add a new course ✅
         *  - owner can't add a course that already exists (i.e. same courseNumber)
         */

        // Case: Empty courses array, just add the course 
        if (courses.length == 0) {
            courses.push(Course({
                courseNumber: _courseNumber,
                courseLevel: _courseType,
                numCredits: 3,
                capacity: 30,
                numEnrolled: 0,
                courseRoster: new address[](0)
            }));

            return;
        }

        for (uint i = 0; i < courses.length; i++) {
            if (keccak256(abi.encodePacked(courses[i].courseNumber)) == keccak256(abi.encodePacked(_courseNumber))) {
                // figure out how to bail out, probably use revert?
                // return;
                continue;
            } else {
                courses.push(Course({
                    courseNumber: _courseNumber,
                    courseLevel: _courseType,
                    numCredits: 3,
                    capacity: 30,
                    numEnrolled: 0,
                    courseRoster: new address[](0)
                }));
                return;    // add course and bail out 
            }
        }
    }

    function getCoursesLength() public view returns(uint) {
        return courses.length;
    }

    function printCourses() public view {
        // Simple print out an array of course numbers after adding the courses
        // in the constructor?? Verify that it matches the course numbers given
        for (uint i = 0; i < courses.length; i++) {
            console.log("Course number: %s", courses[i].courseNumber);
        }
    }

    // function destroy() public onlyOwner {
    //     selfdestruct(payable(owner));
    // }

    // function tipOwner() public payable {
    //     /** TU students, send me 💰! Pls n thx */
    //     (bool success, ) = owner.call{value: msg.value}("");
    //     require(success);
    // }
}
