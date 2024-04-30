const { expect } = require("chai");

console.clear();

describe("Deploy CareerFair Smart Contract", () => {
    it("Register for career fair.", async () => {
        const fair = await ethers.deployContract("CareerFair");
        const [owner, student1, student2, student3] = await ethers.getSigners();
        await fair.connect(student1).enroll();
        await fair.connect(student2).enroll();
        await fair.connect(student3).enroll();

        // attempt registering again
        await fair.connect(student1).enroll();
    });

    it("Print out attendees.", async () => {
        const fair = await ethers.deployContract("CareerFair");
        const [owner, student1, student2, student3] = await ethers.getSigners();
        await fair.connect(student1).enroll();
        await fair.connect(student2).enroll();
        await fair.getAttendees();
    })

    it("Unenroll attendee.", async () => {
        const fair = await ethers.deployContract("CareerFair");
        const [owner, student1, student2, student3] = await ethers.getSigners();
        await fair.connect(student1).enroll();
        await fair.connect(student2).enroll();
        await fair.connect(student3).enroll();
        await fair.getAttendees();
        await fair.connect(student2).unenroll();
        await fair.connect(student3).unenroll();
        await fair.getAttendees();
    })

    it("Add Company.", async () => {
        const fair = await ethers.deployContract("CareerFair");
        const [owner] = await ethers.getSigners();
        await fair.add("Amazon");
        await fair.add("Google");
        await fair.add("Amazon");
        await fair.getCompanies();
    })

});
