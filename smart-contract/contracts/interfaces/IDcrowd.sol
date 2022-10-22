// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error Dcrowd_InvalidExpires(uint deadline);

interface IDcrowd {
    //----------------------------------------------------- structs

    struct ProjectInfo {
        // sender of the `createProject` transaction
        address creator;
        // current funds of the project
        uint balance;
        // UNIX timestamp, given by `block.timestamp`, end of funding period
        uint expires;
        bool funded;
        string uri;
    }

    //----------------------------------------------------- events

    event ProjectCreated(uint indexed projectId, address indexed creator, uint indexed expires, string uri);

    //----------------------------------------------------- project functions

    function createProject(uint expires, string memory uri) external returns (uint);

    function fundProject(uint projectId) external payable;

    //----------------------------------------------------- accessor functions

    function projectCounter() external view returns (uint);

    function getProjectInfo(uint projectId) external view returns (ProjectInfo memory);
}