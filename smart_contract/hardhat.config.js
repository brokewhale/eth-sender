require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
let ALCHEMY_URL = process.env.ALCHEMY_URL;
let CONTRACT = process.env.CONTRACT;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: ALCHEMY_URL,
      accounts: [CONTRACT],
    },
  },
};
