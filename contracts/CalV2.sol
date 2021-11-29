// SPDX-License-Identifier: MIT
import "./CalV1.sol";
pragma solidity 0.8.3;
contract CalculatorV2 is Calculator {
    
    string g;

    function version() pure public returns(string memory) {
        return "This is v2!";
    }

    function add(uint256 a, uint256 b) public override  {
    
    }

    function sub(uint256 a, uint256 b) public override {
       
    }

    function mul(uint256 a, uint256 b) public {
        c = a * b;
    }

    function div(uint256 a, uint256 b) public {
        require(b > 0, "The second parameter should be larger than 0");

        c = a / b;
    }

    function getResult() public view override returns (uint256) {
        return c;
    }

    function setString(string memory _g) public {
        g = _g;
    }

    function getString() public virtual view  returns (string  memory) {
        return g;
    }
//   function _authorizeUpgrade(address) internal override onlyOwner {}
   



    
}