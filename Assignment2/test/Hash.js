const { expect } = require("chai");

describe("Hash Test", function () {
  it("Are hash ids different?", async function () {

    const cosc670 = await ethers.deployContract("Hash", [670]);
    const cosc617 = await ethers.deployContract("Hash", [617]);
    const cosc484 = await ethers.deployContract("Hash", [484]);
    const cosc431 = await ethers.deployContract("Hash", [431]);

  });
});