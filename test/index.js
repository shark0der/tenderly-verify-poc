const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Please use fully qualified names', function () {

  it('deploys', async function () {
    const TokenA = await ethers.getContractFactory('contracts/A/Token.sol:Token');
    const tokenA = await TokenA.deploy();
    await tokenA.deployed();

    const TokenB = await ethers.getContractFactory('contracts/B/Token.sol:Token');
    const tokenB = await TokenB.deploy();
    await tokenB.deployed();

    expect(await tokenA.foo()).to.emit(tokenA, 'Foo').withArgs(9);
    expect(await tokenA.foo()).to.emit(tokenA, 'Foo').withArgs(16);
  });

});
