// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Token {
    string public name = "Falafel";
    string public symbol = "FLF";
    uint8 public decimals = 18;

    uint256 public totalSupply;
    mapping (address => uint256) balances;

    event Transfer(address indexed from, address indexed to, uint256 tokens);

    constructor() {
        totalSupply = 1000 * (10 ** uint256(decimals));
        balances[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function balanceOf(address _owner) public view returns (uint256) {
        return balances[_owner];
    }
}
