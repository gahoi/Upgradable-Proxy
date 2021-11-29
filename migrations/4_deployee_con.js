const dexV3 = artifacts.require('CalculatorV3') ;
const {upgradeProxy } = require('@openzeppelin/truffle-upgrades');
module.exports =  async function (deployer) {
    deployer.deploy(dexV3);
    const ins = await upgradeProxy("0x380fc33a173B64DD54904791E070d8aa11B4dca8", dexV3);
    console.log("v3 deployed to",ins.address);
    
  };