require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

const tenderly = require('@tenderly/hardhat-tenderly');
tenderly.setup({ automaticVerifications: false });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  networks: {
    tenderly: {
      accounts: [process.env.ACCOUNT_KEY],
      gasPrice: 0,
      gas: 25000000,
      url: process.env.PROVIDER_URL,
    },
  },

  solidity: {
    compilers: [
      { version: '0.8.9' },
      { version: '0.8.16' },
    ],
  },

  tenderly: {
    username: 'NexusMutual',
    project: 'nexusmutual',
    forkNetwork: 'mainnet',
    deploymentsDir: 'deployments',
  },
};
