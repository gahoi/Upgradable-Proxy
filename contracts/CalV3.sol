// SPDX-License-Identifier: MIT
import "./CalV2.sol";
pragma solidity 0.8.3;
contract CalculatorV3 is CalculatorV2 {
    
//string g;
  string h;

    // function version() pure public  returns(string memory) {
    //     return "This is v3!";
    // }

    function setValue(string memory _h) public {
        h = _h;
    }

    function getval() public  view  returns (string  memory) {
        return h;
    }
}