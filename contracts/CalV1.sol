// SPDX-License-Identifier: MIT

pragma solidity 0.8.3;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
contract Calculator is UUPSUpgradeable, OwnableUpgradeable {
    uint256 c;

    function intialize() public  initializer {
     
       __Ownable_init();
     // msg.sender = owner;
    }

    function add(uint256 a, uint256 b) public virtual {
        c = a + b;
    }

    function sub(uint256 a, uint256 b) public virtual {
        c = a - b;
    }

    

    function getResult() public virtual view returns (uint256 ) {
        return c;
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
    
}