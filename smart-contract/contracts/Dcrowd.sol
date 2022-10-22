// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IDcrowd.sol";

contract Dcrowd is IDcrowd {
    uint public projectCounter;

    mapping(uint => ProjectInfo) public projectInfos;

    constructor() {
        projectCounter = 0;
    }

    function createProject(uint expires, string memory uri) external override {
        if (expires < block.timestamp) revert Dcrowd_InvalidExpires(expires);
        uint projectId = projectCounter++;

        projectInfos[projectId] = ProjectInfo({
            creator: msg.sender,
            balance: 0,
            expires: expires,
            funded: false,
            uri: uri
        });
    }
}
