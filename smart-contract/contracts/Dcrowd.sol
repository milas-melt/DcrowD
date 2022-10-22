// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IDcrowd.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Dcrowd is IDcrowd, ReentrancyGuard {
    //----------------------------------------------------- storage

    uint private _projectCounter;

    // project ID -> project info
    mapping(uint => ProjectInfo) private _projectInfos;

    // funder address -> project ID -> amount funded
    mapping(address => mapping(uint => uint)) private _fundings;

    //----------------------------------------------------- misc functions

    constructor() {
        _projectCounter = 0;
    }

    //----------------------------------------------------- project functions

    function createProject(uint64 expires, uint goal, string calldata uri) external payable override returns (uint) {
        // expires valid
        if (expires < block.timestamp || block.timestamp + 100 days < expires)
            revert Dcrowd_InvalidExpires(expires);

        // store project
        uint projectId = _projectCounter++;
        _projectInfos[projectId] = ProjectInfo({
            creator: msg.sender,
            expires: expires,
            funded: false,
            goal: goal,
            balance: msg.value,
            uri: uri
        });

        emit ProjectCreated(projectId, msg.sender, expires, goal, uri);
        return projectId;
    }

    function fundProject(uint projectId) external payable override {
        // ETH is sent
        if (msg.value == 0) revert();

        ProjectInfo memory project = _projectInfos[projectId];
        // project exists
        if (project.creator == address(0))
            revert Dcrowd_ProjectNotExists(projectId);
        // project not fully funded
        if (project.goal <= project.balance || project.funded)
            revert Dcrowd_ProjectAlreadyFunded(projectId);
        if (project.expires < block.timestamp)
            revert Dcrowd_ProjectFundingExpired(projectId);

        _projectInfos[projectId].balance += msg.value;
        _fundings[msg.sender][projectId] += msg.value;
        emit ProjectFunded(projectId, msg.sender, msg.value);
    }

    function collectFunds(uint projectId) external override nonReentrant {
        ProjectInfo memory project = _projectInfos[projectId];
        // sender is creator
        if (msg.sender != project.creator) revert Dcrowd_NotProjectCreator(msg.sender);
        // project is fully funded
        if (project.balance < project.goal) revert Dcrowd_ProjectNotFunded(projectId);
        // funds have not been already collected
        if (project.funded) revert Dcrowd_ProjectAlreadyFunded(projectId);

        // update storage
        _projectInfos[projectId].funded = true;

        // transfer funds
        (bool success, ) = project.creator.call{value: project.balance, gas: 2300}("");
        if (!success) revert Dcrowd_TransferFailed(project.creator, project.balance);
        emit FundsCollected(projectId, project.creator, project.balance);
    }

    function cancelFunding(uint projectId, uint amount) external override {
        ProjectInfo memory project = _projectInfos[projectId];
        uint funding = _fundings[msg.sender][projectId];
        // project exists
        if (project.creator == address(0)) revert Dcrowd_ProjectNotExists(projectId);
        // project not funded
        if (project.funded) revert Dcrowd_ProjectAlreadyFunded(projectId);
        // has funded
        if (funding == 0) revert();

        // transfer funds
        (bool success, ) = msg.sender.call{value: amount, gas: 2300}("");
        if (!success) revert Dcrowd_TransferFailed(msg.sender, amount);
    }

    //----------------------------------------------------- accessor functions

    function projectCounter() external view override returns (uint) {
        return _projectCounter;
    }

    function getProjectInfo(uint projectId) external view override returns (ProjectInfo memory) {
        return _projectInfos[projectId];
    }
}
