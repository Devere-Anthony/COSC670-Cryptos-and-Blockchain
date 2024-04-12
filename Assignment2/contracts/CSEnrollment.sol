// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CSEnrollment {

//==============================================================================
// CONTRACT DATA
//==============================================================================
    address owner; 

    enum Level {
        Undergradute,
        Graduate
    }

    struct Student {
        address studentId;
        uint8 numCredits;
        Level studentLevel;
    }

    struct Course {
        // string courseName;
        string courseNumber;
        // bytes32 courseId;    // do I need a unique idenfitier like this?
        Level courseLevel;
        uint8 numCredits;
        uint8 capacity;
        uint numEnrolled;
        address[] courseRoster;
    }

    Course[] courses;

//==============================================================================
// HELPER FUNCTIONS
//==============================================================================
    constructor() {
        owner = msg.sender;

        // console.log("Owner: %s", owner);
        addCourse("670", Level.Graduate);
        addCourse("617", Level.Graduate);
        addCourse("484", Level.Graduate);
        addCourse("431", Level.Graduate);
        // console.log("Number of courses: %s", getCoursesLength());
        printCourses();
    }

    modifier onlyOwner() {
        /** Function modifier that allows only the owner to execute function. */
        require(msg.sender == owner);
        _;
    }

    function addCourse( string memory _courseNumber, Level _courseType) public onlyOwner {
        /** Adds a new course to the enrollment contract */

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

        // Handle all other cases
        for (uint i = 0; i < courses.length; i++) {
            if (keccak256(abi.encodePacked(courses[i].courseNumber)) == keccak256(abi.encodePacked(_courseNumber))) {
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
                // console.log(msg.sender);
                return;    // add course and bail out 
            }
        }
    }

//==============================================================================
// HELPER FUNCTIONS
//==============================================================================
    function getCoursesLength() public view returns(uint) {
        return courses.length;
    }

    function printCourses() public view {
        /** Print out course numbers in the courses array */
        for (uint i = 0; i < courses.length; i++) {
            console.log("Course number: %s", courses[i].courseNumber);
        }
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
