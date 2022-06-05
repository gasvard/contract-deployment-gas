// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";

contract GasvardNFT is ERC721A {
    bool private _isPaused;

    constructor(bool isPaused) ERC721A("GasvardNFT", "GAS") {
        _isPaused = isPaused;
    }

    function freeMintOne() external payable {
        require(!_isPaused, "Mint is paused");
        _mint(msg.sender, 1);
    }

    function togglePaused() external {
        _isPaused = !_isPaused;
    }
}
