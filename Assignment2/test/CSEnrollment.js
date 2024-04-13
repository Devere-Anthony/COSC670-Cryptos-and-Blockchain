const { expect } = require("chai");

describe("Testing CSEnrollment:", function () {
    it("Adding courses", async () => {
        const registrar = await ethers.deployContract("CSEnrollment");
    });

    it("Student registration", async () => {
        // deploy contract
        const registrar = await ethers.deployContract("CSEnrollment");

        // Get different addresses to test with
        const [owner, student1, student2, student3, student4] = await ethers.getSigners();

        // Register the students for 670
        await registrar.connect(student1).register(20, 0, '670');
        await registrar.connect(student2).register(20, 0, '670');
        await registrar.connect(student3).register(20, 0, '670');
        await registrar.connect(student4).register(20, 0, '670');

        // Let's check the four course rosters for accuracy 
        console.log();
        await registrar.getRoster('670');

        // Register for nonexisting course 
        await registrar.connect(student1).register(20, 0, '880');
        console.log()
        await registrar.getRoster('880');
    });
});