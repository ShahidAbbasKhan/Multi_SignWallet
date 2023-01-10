
const hre = require("hardhat");

async function main() {

  const MultiMultiSignWallet = await hre.ethers.getContractFactory("MultiMultiSignWallet");
  const MultiWallet = await MultiMultiSignWallet.deploy(["0x6d0774AB0E72b32144Cf10208F015a5CAD3acFa0","0xa881eF338fCfE85cB64f68e2AeA0b8664131055c"],"2");

  await MultiWallet.deployed();

  console.log(
    `MultiMultiSignWallet Contract is  deployed to ${MultiWallet.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x169ff5478d739F21a6FCDAD51D95bF3699e89030