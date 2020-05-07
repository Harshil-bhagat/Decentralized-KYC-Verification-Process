var KYCContract = artifacts.require("KYCContract");

module.exports = function(deployer) {
  // deployment steps
  rpcUrl: 'http://localhost:7545',
  port: 7545
  deployer.deploy(KYCContract);
};
