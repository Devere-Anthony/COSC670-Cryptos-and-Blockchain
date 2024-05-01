const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const CareerFairModule = buildModule("CareerFairModule", (m) => {
  const careerFair = m.contract("CareerFair");

  return { careerFair };
});

module.exports = CareerFairModule;