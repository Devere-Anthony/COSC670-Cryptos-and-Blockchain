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

    // Student not strictly necessary but may be useful later, just delete or 
    // keep commented out until/if the time comes
    // struct Student {
    //     address studentId;
    //     uint8 numCredits;
    //     Level studentLevel;
    // }

    struct Course {
        // string courseName;
        string courseNumber;
        // bytes32 courseId;    // does it need unique idenfitier like this?
        Level courseLevel;
        uint8 numCredits;
        uint8 capacity;
        uint numEnrolled;
        address[] courseRoster;
    }

    Course[] courses;
    // Student[] students;

//==============================================================================
// ESSENTIAL FUNCTIONS
//==============================================================================
    constructor() {
        owner = msg.sender;
        addCourse("670", Level.Graduate);
        addCourse("617", Level.Graduate);
        addCourse("484", Level.Undergradute);
        addCourse("431", Level.Undergradute);
    }

    modifier onlyOwner() {
        /** Function modifier that allows only the owner to execute function. */
        require(msg.sender == owner);
        _;
    }

    function addCourse( string memory _courseNumber, Level _courseType) public onlyOwner {
        /** Adds a new course to the enrollment contract */

        // empty courses array => just add the course 
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

        // all other cases
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
                return;   
            }
        }
    }

    function register(uint8 credits, Level studentType, string memory course) external {
        /** Allow a student to register for an offered course. */

        // let's find the course's index in the courses array if it exists
        //and then use that to check against the constraints
        int courseIndex = -1;
        for (uint i = 0; i < courses.length; i++) {
            bool sameString = compareStrings(course, courses[i].courseNumber);
            if (sameString) {
                courseIndex = int(i);
            }
        }

        // Case: Course doesn't exist
        if (courseIndex == -1) {
            console.log("ENROLLEMENT ERROR: %s is not currently offered!", course);
            return;
        } 

        // Case: Course is full
        if (getRosterLength(course) >= 30) {
            console.log("ENROLLMENT ERROR: %s is already full!", course);
            return;
        }

        // Case: All constraints met, student can enroll
        courses[uint(courseIndex)].courseRoster.push(msg.sender);
}

    function getRoster(string memory course) public view {
        /** For now, simply prints the roster for a given course? */
    
        // find index of course
        int index = -1;
        for (uint i = 0; i < courses.length; i++) {
            bool foundIndex = compareStrings(course, courses[i].courseNumber);
            if (foundIndex == true) {
                index = int(i);
            } 
        }

        // Case: Course not found => bail out
        if (index == -1) {
            console.log("ENROLLMENT ERROR: %s is not offered!", course);
            return;
        } 

        // course found => return EOAs of registered students
         console.log("Roster for %s:", course);
         for (uint i = 0; i < courses[uint256(index)].courseRoster.length; i++) {
            console.log("%s. %s", (i+1), courses[uint256(index)].courseRoster[i]);
        }

    }

//==============================================================================
// HELPER FUNCTIONS
//==============================================================================
    function getCoursesLength() public view returns(uint) {
        /** Get length of the courses array */
        return courses.length;
    }

    function getRosterLength(string memory course) public view returns(uint) {
        /** Get number of enrolled students for specified course */
        for (uint i = 0; i < courses.length; i++) {
            bool foundIndex = compareStrings(course, courses[i].courseNumber);
            if (foundIndex == true) {
                return courses[i].courseRoster.length;
            } 
        }
    }


    function printCourses() public view {
        /** Print out course numbers in the courses array */
        for (uint i = 0; i < courses.length; i++) {
            console.log("Course number: %s", courses[i].courseNumber);
        }
    }

    function compareStrings(string memory _a, string memory _b) private pure returns(bool) {
        /** Compare string values...why isn't this built into Solidity? 🤔 */
        if (keccak256(abi.encodePacked(_a)) == keccak256(abi.encodePacked(_b))) {
            return true;
        } else {
            return false;
        }
        
    }

    function destroy() public onlyOwner {
        /** Escape hatch just in case, blow it all upppp. */
        selfdestruct(payable(owner));
    }

    function tipOwner() public payable {
        /** TU students, send me 💰, if you'd like! Pls n thx. */
        (bool success, ) = owner.call{value: msg.value}("");
        require(success);
    }
}
