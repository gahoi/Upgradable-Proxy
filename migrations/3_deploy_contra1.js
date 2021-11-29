const dexV2 = artifacts.require('CalculatorV2') ;
const {upgradeProxy } = require('@openzeppelin/truffle-upgrades');
module.exports =  async function (deployer) {
    deployer.deploy(dexV2);
    const ins = await upgradeProxy("0x380fc33a173B64DD54904791E070d8aa11B4dca8", dexV2);
    console.log("v2 deployed to",ins.address);
    
  };