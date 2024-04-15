const { expect } = require("chai");

console.clear();

// describe("Deploy CSEnrollment Smart Contract", () => {
//     it("Deploying Contract", async () => {
//         const registrar = await ethers.deployContract("CSEnrollment");
//     });
// });

describe("Student Registration", () => {
    // it("Successful registration and roster", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1, student2, student3, student4] = await ethers.getSigners();
    //     await registrar.connect(student1).register(20, 0, '670');
    //     await registrar.connect(student2).register(15, 0, '670');
    //     await registrar.connect(student3).register(3, 0, '670');
    //     await registrar.connect(student4).register(30, 0, '670');
    //     console.log();
    //     await registrar.getRoster('670');
    // });

    // it("Nonexisting course", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1] = await ethers.getSigners();
    //     await registrar.connect(student1).register(20, 0, '880');
    //     console.log()
    //     await registrar.getRoster('880');
    // });

    // it("Class is not full", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1] = await ethers.getSigners();
    //     const numStudents = 20;
    //     for (let i = 0; i < numStudents; i++) {
    //         await registrar.connect(student1).register(20, 0, '670');
    //     }
    //     console.log();
    //     await registrar.getRoster('670');
    // });

    // it("Class is full", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1, student2] = await ethers.getSigners();
    //     const numStudents = 30;
    //     for (let i = 0; i < numStudents; i++) {
    //         await registrar.connect(student1).register(20, 0, '670');
    //     }ey 
    //     console.log()
    //     await registrar.getRoster('670');

    //     // Attempt to add one more student
    //     await registrar.connect(student2).register(30, 0, '670');
    // });
    
    // it("Undergrad can only register for undergrad courses", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1] = await ethers.getSigners();

    //     // Attempt to register for undergrad course as an undergrad
    //     await registrar.connect(student1).register(15, 0, '431');
    //     await registrar.getRoster('431');
    // });

    // it("Undergrad can't register for graduate course", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1] = await ethers.getSigners();

    //     // Attempt to register for undergrad course as an undergrad
    //     await registrar.connect(student1).register(15, 0, '670');
    //     await registrar.getRoster('670');
    // });

    // it("Graduate can register for any course", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1, student2, student3] = await ethers.getSigners();

    //     // Register for a graduate course with 20+ credits 
    //     await registrar.connect(student1).register(21, 1, '670');
    //     await registrar.getRoster('670');

    //     // Register for an undergraduate course with 20+ credits
    //     await registrar.connect(student2).register(55, 1, '484');
    //     await registrar.getRoster('484');
    // });

    // it("Graduate can't register courses", async () => {
    //     const registrar = await ethers.deployContract("CSEnrollment");
    //     const [owner, student1, student2, student3] = await ethers.getSigners();

    //     // Fail to register to graduate course with <= 20 credits
    //     await registrar.connect(student1).register(3, 1, '617');
    //     await registrar.getRoster('617');

    //     // Fail to register undergraduate course with <= 20 credits
    //     await registrar.connect(student2).register(3, 1, '484');
    //     await registrar.getRoster('484');

    //     // Fail to register for 431 with >= 20 credits;
    //     await registrar.connect(student3).register(33, 1, '431');
    //     await registrar.getRoster('431');

    //     // Fail to register for 431 with <= 20 credits;
    //     await registrar.connect(student3).register(3, 1, '431');
    //     await registrar.getRoster('431');

    // });
});