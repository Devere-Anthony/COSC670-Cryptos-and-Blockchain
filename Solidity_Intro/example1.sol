pragma solidity ^0.8.0;

// Transfer some data to this address
address payable someAddress = address(0x12344559023809229012935);
address myAddress = address(this);

// Is this in Ether or Wei? - Look this shit uppppppp
if (someAddress.balance < 10 && myAddress.balance >= 10) {
    someAddress.transfer(10)
}