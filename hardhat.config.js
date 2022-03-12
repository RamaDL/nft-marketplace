require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:__dirname+'/.env'})
const fs = require("fs");
const metamaskPrivateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMI_POLYGON_TESTNET_KEY}`,
      accounts: [`${metamaskPrivateKey}`]
    },
    mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMI_POLYGON_MAINNET_KEY}`,
      accounts: [`${metamaskPrivateKey}`]
    }
  },
  solidity: "0.8.4",
};
