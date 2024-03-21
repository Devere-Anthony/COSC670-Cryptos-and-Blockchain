pragma solidity ^0.8.0;

contract someEvent {
  
    uint256 public value = 0;

    /* Don't always define a string because it automatically takes the max
     * amount of space and we don't want to waste data on the chain */
    string name = "Devere Weaver";
  
    // Declaring an event
    event Adder(address owner);   
  
    // Defining a function for logging event 
    function getAddedValues(uint _v1, uint _v2) public {
        emit Adder(msg.sender); 
        value = _v1 + _v2;
    }
}