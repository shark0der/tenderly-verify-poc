const { ethers, run, tenderly } = require('hardhat');

async function main() {
  await run('compile');

  console.log('Deploying A/Token.sol');
  const TokenA = await ethers.getContractFactory('contracts/A/Token.sol:Token');
  const tokenA = await TokenA.deploy();
  await tokenA.deployed();

  console.log('Deploying B/Token.sol');
  const TokenB = await ethers.getContractFactory('contracts/B/Token.sol:Token');
  const tokenB = await TokenB.deploy();
  await tokenB.deployed();

  // this is wrong but might work
  console.log('Verifying token A');
  await tenderly.verify({ name: 'Token', address: tokenA.address });

  // this is wrong but might work
  console.log('Verifying token B');
  await tenderly.verify({ name: 'Token', address: tokenB.address });

  // how it should be!!!
  console.log('Verifying contracts/A/Token.sol:Token');
  await tenderly.verify({ name: 'contracts/A/Token.sol:Token', address: tokenA.address });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
