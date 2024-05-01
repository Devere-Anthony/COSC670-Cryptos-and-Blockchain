const { expect } = require("chai");

console.clear();

describe("Deploy CareerFair Smart Contract", () => {
    // it("Register for career fair.", async () => {
    //     const fair = await ethers.deployContract("CareerFair");
    //     const [owner, student1, student2, student3] = await ethers.getSigners();
    //     await fair.connect(student1).enroll();
    //     await fair.connect(student2).enroll();
    //     await fair.connect(student3).enroll();
    //     await fair.connect(student1).enroll();
    // });

    // it("Print out attendees.", async () => {
    //     const fair = await ethers.deployContract("CareerFair");
    //     const [owner, student1, student2, student3] = await ethers.getSigners();
    //     await fair.connect(student1).enroll();
    //     await fair.connect(student2).enroll();
    //     const registered = await fair.getAttendees();
    //     console.log(registered);
    // })

    it("Unenroll attendee.", async () => {
        const fair = await ethers.deployContract("CareerFair");
        const [owner, student1, student2, student3, student4, student5] = await ethers.getSigners();
        await fair.connect(student1).enroll();
        await fair.connect(student2).enroll();
        await fair.connect(student3).enroll();
        // await fair.updateAttendees();
        a = await fair.getAttendees();
        console.log(a);

        await fair.connect(student2).unenroll();
        await fair.connect(student1).unenroll();
        await fair.connect(student3).unenroll();
        // await fair.updateAttendees();
        a = await fair.getAttendees();
        console.log(a);

    })

    // it("Add Company.", async () => {
    //     const fair = await ethers.deployContract("CareerFair");
    //     const [owner] = await ethers.getSigners();
    //     await fair.add("Amazon");
    //     await fair.add("Google");
    //     await fair.add("Amazon");
    //     const companies = await fair.getCompanies();
    //     console.log(companies);
    // })
});