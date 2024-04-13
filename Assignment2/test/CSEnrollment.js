const { expect } = require("chai");

console.clear();

// describe("Deploy CSEnrollment Smart Contract", () => {
//     it("Deploying Contract", async () => {
//         const registrar = await ethers.deployContract("CSEnrollment");
//     });
// });

// describe("Student Registration", () => {
//     it("Successful registration and roster", async () => {
//         const registrar = await ethers.deployContract("CSEnrollment");
//         const [owner, student1, student2, student3, student4] = await ethers.getSigners();
//         await registrar.connect(student1).register(20, 0, '670');
//         await registrar.connect(student2).register(15, 0, '670');
//         await registrar.connect(student3).register(3, 0, '670');
//         await registrar.connect(student4).register(30, 0, '670');
//         console.log();
//         await registrar.getRoster('670');
//     });

//     it("Nonexisting course", async () => {
//         const registrar = await ethers.deployContract("CSEnrollment");
//         const [owner, student1] = await ethers.getSigners();
//         await registrar.connect(student1).register(20, 0, '880');
//         console.log()
//         await registrar.getRoster('880');
//     });

//     it("Class is not full", async () => {
//         const registrar = await ethers.deployContract("CSEnrollment");
//         const [owner, student1] = await ethers.getSigners();
//         const numStudents = 20;
//         for (let i = 0; i < numStudents; i++) {
//             await registrar.connect(student1).register(20, 0, '670');
//         }
//         console.log();
//         await registrar.getRoster('670');
//     });

//     it("Class is full", async () => {
//         const registrar = await ethers.deployContract("CSEnrollment");
//         const [owner, student1, student2] = await ethers.getSigners();
//         const numStudents = 30;
//         for (let i = 0; i < numStudents; i++) {
//             await registrar.connect(student1).register(20, 0, '670');
//         }
//         console.log()
//         await registrar.getRoster('670');

//         // Attempt to add one more student
//         await registrar.connect(student2).register(30, 0, '670');
//     });
// });