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

    struct Course {
        string courseNumber;
        Level courseLevel;
        uint8 numCredits;
        uint8 capacity;
        uint numEnrolled;
        address[] courseRoster;
    }

    Course[] courses;
    address[] students;

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

        // Case: Empty courses array; just add the course 
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
            if (compareStrings(courses[i].courseNumber, _courseNumber)) {
                console.log("ADDING COURSE ERROR: Course %s already exists", _courseNumber);
                return;
            } else {
                continue;
            }
        }

        courses.push(Course({
            courseNumber: _courseNumber,
            courseLevel: _courseType,
            numCredits: 3,
            capacity: 30,
            numEnrolled: 0,
            courseRoster: new address[](0)
        }));
    }

    function register(uint8 _credits, Level _studentType, string memory _course) external {
        /** Allow a student to register for an offered course. */

        // Check if student is already enrolled
        for (uint i = 0; i < students.length; i++) {
            if (msg.sender == students[i]) {
                console.log("ENROLLMENT ERROR: Student %s is already enrolled in a course!", msg.sender);
                return;
            }
        }

        // Find course index
        int courseIndex = -1;
        for (uint i = 0; i < courses.length; i++) {
            bool sameString = compareStrings(_course, courses[i].courseNumber);
            if (sameString) {
                courseIndex = int(i);
            }
        }

        // Case: Course doesn't exist
        if (courseIndex == -1) {
            console.log("ENROLLEMENT ERROR: %s is not currently offered!", _course);
            return;
        } 

        // Case: Course is full
        if (getRosterLength(_course) >= 30) {
            console.log("ENROLLMENT ERROR: %s is already full!", _course);
            return;
        }

        // Case: Undergrad can only register for undergrad courses
        if (_studentType == Level.Undergradute && courses[uint(courseIndex)].courseLevel == Level.Undergradute) {
            courses[uint(courseIndex)].courseRoster.push(msg.sender);
            students.push(msg.sender);
            return;
        }

        // Case: Undergrad can't register for graduate course
        if (_studentType == Level.Undergradute && courses[uint(courseIndex)].courseLevel == Level.Graduate) {
            console.log("ENROLLMENT ERROR: Undergraduate cannot enroll in graduate course!");
            return;
        }


        // Case:  Grad student can register for any course if >= 20 credits and not 431
        if (_studentType == Level.Graduate && _credits > 20) {
            if (compareStrings('431', _course)) {
                console.log("ENROLLEMENT ERROR: Graduate students cannot enroll in 431!");
                return;
            } else {
                courses[uint(courseIndex)].courseRoster.push(msg.sender);
                students.push(msg.sender);
                return;
            }
        } else {
            console.log("ENROLLEMENT ERROR: Graduate student has less than 20 credits!");
        }
}

    function getRoster(string memory _course) public view {
        /** Prints the roster for a given course */
    
        // Find index of course
        int index = -1;
        for (uint i = 0; i < courses.length; i++) {
            bool foundIndex = compareStrings(_course, courses[i].courseNumber);
            if (foundIndex == true) {
                index = int(i);
            } 
        }

        // Case: Course not found; bail out
        if (index == -1) {
            console.log("ENROLLMENT ERROR: %s is not offered!", _course);
            return;
        } 

        // Case: Course found; return EOAs of registered students
         console.log("Roster for %s:", _course);
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

    function getRosterLength(string memory _course) public view returns(uint) {
        /** Get number of registered students for specified course */
        for (uint i = 0; i < courses.length; i++) {
            bool foundIndex = compareStrings(_course, courses[i].courseNumber);
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

    function getStudents() public view {
        /** Print list of registered students to console */
        console.log("Registered Students");
        for (uint i = 0; i < students.length; i++) {
            console.log("Student: %s", students[i]);
        }
    }

    function tipOwner() public payable {
        /** TU students, send me 💰, if you'd like! Pls n thx */
        (bool success, ) = owner.call{value: msg.value}("");
        require(success);
    }
}