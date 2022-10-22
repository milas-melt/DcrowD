// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error Dcrowd_InvalidExpires(uint expires);
error Dcrowd_ProjectNotExists(uint projectId);
error Dcrowd_ProjectAlreadyFunded(uint projectId);
error Dcrowd_NotProjectCreator(address sender);
error Dcrowd_ProjectNotFunded(uint projectId);
error Dcrowd_TransferFailed(address to, uint value);
error Dcrowd_ProjectFundingExpired(uint projectId);

interface IDcrowd {
    //----------------------------------------------------- structs

    struct ProjectInfo {
        // creator of the project
        address creator;
        // UNIX timestamp, given by `block.timestamp`, end of funding period
        uint64 expires;
        // if the funds have been transferred to the project creator
        bool funded;
        // project funds goal
        uint goal;
        // current funds of the project
        uint balance;
        // project metadata
        string uri;
    }

    //----------------------------------------------------- events

    event ProjectCreated(uint indexed projectId, address indexed creator, uint64 indexed expires, uint goal, string uri);

    event ProjectFunded(uint indexed projectId, address indexed funder, uint amount);

    event FundsCollected(uint indexed projectId, address indexed creator, uint funds);

    //----------------------------------------------------- project functions

    /// @param expires UNIX timextamp, end of the funding period of the project.
    /// @return Project ID
    function createProject(uint64 expires, uint goal, string calldata uri) external payable returns (uint);

    function collectFunds(uint projectId) external;

    //----------------------------------------------------- funder functions

    function fundProject(uint projectId) external payable;

    function cancelFunding(uint projectId, uint amount) external;

    //----------------------------------------------------- accessor functions

    function projectCounter() external view returns (uint);

    function getProjectInfo(uint projectId) external view returns (ProjectInfo memory);
}