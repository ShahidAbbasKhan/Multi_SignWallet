
const hre = require("hardhat");

async function main() {

  const MultiMultiSignWallet = await hre.ethers.getContractFactory("MultiMultiSignWallet");
  const MultiWallet = await MultiMultiSignWallet.deploy();

  await MultiWallet.deployed();

  console.log(
    `MultiMultiSignWallet Contract is  deployed to ${MultiWallet.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
