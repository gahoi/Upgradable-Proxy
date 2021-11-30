const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();



module.exports = {
  networks: {
    development: {

      provider: () => new HDWalletProvider({
        privateKeys: [process.env.abc],
        providerOrUrl: "http://127.0.0.1:8545",
        numberOfAddress: 1
      }),
      network_id: "*"

    },
    private: {

      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: "http://3.80.41.73:8545",
        numberOfAddress: 1
      }),
      network_id: "*"

    }, goeril: {
      provider: () => new HDWalletProvider({
        privateKeys: [process.env.abc],
        providerOrUrl: "https://goerli.infura.io/v3/749beb03d71f432e941731c2f90a7448",
        numberOfAddress: 1
      }),
      network_id: 4
    }
  }, compilers: {
    solc: {
      version: "0.8.3"
    }
  }

}
