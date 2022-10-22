// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error Dcrowd_InvalidExpires(uint256 expires);
error Dcrowd_ProjectNotExists(uint256 projectId);
error Dcrowd_ProjectAlreadyFunded(uint256 projectId);
error Dcrowd_NotProjectCreator(address sender);
error Dcrowd_ProjectNotFunded(uint256 projectId);
error Dcrowd_TransferFailed(address to, uint256 value);
error Dcrowd_ProjectFundingExpired(uint256 projectId);
error Dcrowd_InsufficientAmount(uint256 actual, uint256 expected);
error Dcrowd_InvalidAddress(address addr);

/// @title Crowd Funding Contract
/// @author Nicolas Bayle
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
        uint256 goal;
        // current funds of the project
        uint256 balance;
    }

    //----------------------------------------------------- events

    event ProjectCreated(
        uint256 indexed projectId,
        address indexed creator,
        uint64 indexed expires,
        uint256 goal,
        string uri
    );

    event FundsCollected(uint256 indexed projectId, address indexed creator, uint256 funds);

    event ProjectFunded(uint256 indexed projectId, address indexed funder, uint256 amount);

    event FundingCancelled(uint256 indexed projectId, address indexed funder, uint256 amount);

    event FeesWithdrawn(address indexed to, uint256 amount);

    //----------------------------------------------------- creator functions

    /// @param expires UNIX timextamp, end of the funding period of the project.
    /// @return Project ID
    function createProject(
        uint64 expires,
        uint256 goal,
        string calldata uri
    ) external returns (uint256);

    function collectFunds(uint256 projectId) external;

    //----------------------------------------------------- funder functions

    function fundProject(uint256 projectId) external payable;

    function cancelFunding(uint256 projectId, uint256 amount) external;

    //----------------------------------------------------- owner functions

    function withdrawFees(address to) external;

    function updateMaxFundingPeriod(uint64 newMaxFundingPeriod) external;

    function updatePlatformFee(uint16 newPlatformFee) external;

    //----------------------------------------------------- accessor functions

    function feeBalance() external view returns (uint256);

    function projectCounter() external view returns (uint256);

    function projectInfo(uint256 projectId) external view returns (ProjectInfo memory);

    function projectURI(uint256 projectId) external view returns (string memory);

    function funding(address funder, uint256 projectId) external view returns (uint256);
}
