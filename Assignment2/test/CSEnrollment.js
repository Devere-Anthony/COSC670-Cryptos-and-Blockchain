require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Courses Offered:", function () {
    it("Added COSC670?.../", async function () {
        const cosc670 = await ethers.deployContract("CSEnrollment");

        // Why is there no output here?...
    });
});
