const dex = artifacts.require('Calculator');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  const instance =await deployProxy(dex, { deployer, initializer: 'intialize' },{kind :'uups'});
  console.log('Deployed', instance.address);

};

