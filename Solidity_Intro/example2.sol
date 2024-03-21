contract TowsonU {
    string p1 = "Towson U";
    bytes32 p2 = "Towson U";

    uint public x;
    constructor (uint a) public payable {
        x = a;
    }
}