pragma solidity ^0.4.18;

contract SimpleStorage {
  uint256 public value;
  
  function setValue(uint256 _value) public {
    value = _value;
  }
}