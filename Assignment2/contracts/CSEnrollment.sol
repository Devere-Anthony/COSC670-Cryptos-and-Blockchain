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
// ESSENTIAL FUNCTIONS
//==============================================================================
    constructor() {
        owner = msg.sender;

        // console.log("Owner: %s", owner);
        addCourse("670", Level.Graduate);
        addCourse("617", Level.Graduate);
        addCourse("484", Level.Undergradute);
        addCourse("431", Level.Undergradute);
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

    // TODO: Figure out if this should be external or public and if external, then how do we 
    // test this guy then? 
    function register(uint8 credits, Level studentType, string memory course) public {
        /** Allow a student to register for an offered course. */
        // TODO: Only implement the ability to just add a student to the roster, don't do any 
        // other checking or constraints until this is done

        address studentID = msg.sender;

        // when a student EOA invokes this function 
        for (uint i = 0; i < courses.length; i++) {
            bool sameString = compareStrings(course, courses[i].courseNumber);
            
            if(sameString) {    // add it to the course roster
                courses[i].courseRoster.push(studentID);
            }
        }

        // take the course and search for it in the courses array 

        // once it's found, add the studentID to that Course's courseRoster
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

    function compareStrings(string memory _a, string memory _b) private returns(bool) {
        if (keccak256(abi.encodePacked(_a)) == keccak256(abi.encodePacked(_b))) {
            return true;
        } else {
            return false;
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
