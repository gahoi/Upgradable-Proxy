module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" ,// Match any network id
     // from:"0xc9946d79Ac322cca260047018a49cBA20Cc77a24",
      
    }
  },
  compilers: {
    solc: {
      version: "0.8.3"
    }
  }
}
