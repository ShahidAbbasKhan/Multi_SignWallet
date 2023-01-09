
const hre = require("hardhat");

async function main() {

  const MultiMultiSignWallet = await hre.ethers.getContractFactory("MultiMultiSignWallet");
  const MultiWallet = await MultiMultiSignWallet.deploy();

  await MultiWallet.deployed([0x6d0774AB0E72b32144Cf10208F015a5CAD3acFa0,0xa881eF338fCfE85cB64f68e2AeA0b8664131055c],2);

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
