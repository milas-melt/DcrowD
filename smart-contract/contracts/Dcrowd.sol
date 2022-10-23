// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IDcrowd.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Dcrowd is IDcrowd, Ownable, ReentrancyGuard {
    //----------------------------------------------------- constants

    uint16 public constant FEE_DENOMINATOR = 10000;

    //----------------------------------------------------- storage

    uint256 private _projectCounter;

    uint256 private _feeBalance;

    uint64 private _maxFundingPeriod;

    uint16 private _platformFee;

    // project ID -> project info
    mapping(uint256 => ProjectInfo) private _projectInfos;

    // project ID -> project uri
    mapping(uint256 => string) private _uris;

    // funder address -> project ID -> amount funded
    mapping(address => mapping(uint256 => uint256)) private _fundings;

    // creator address -> rating
    mapping(address => uint8) private _creatorRatings;

    //----------------------------------------------------- misc functions

    constructor() {
        _projectCounter = 0;
        _maxFundingPeriod = 100 days;
        _platformFee = 0;
    }

    //----------------------------------------------------- creator functions

    function createProject(
        uint64 expires,
        uint256 goal,
        string calldata uri
    ) external override returns (uint256) {
        // expires valid
        if (expires < block.timestamp || block.timestamp + _maxFundingPeriod < expires)
            revert Dcrowd_InvalidExpires(expires);
        // store project
        uint256 projectId = _projectCounter++;
        _projectInfos[projectId] = ProjectInfo({
            creator: _msgSender(),
            expires: expires,
            funded: false,
            goal: goal,
            balance: 0
        });
        _uris[projectId] = uri;
        // emit and return
        emit ProjectCreated(projectId, _msgSender(), expires, goal, uri);
        return projectId;
    }

    function collectFunds(uint256 projectId) external override nonReentrant {
        ProjectInfo memory project = _projectInfos[projectId];
        // sender is creator
        if (_msgSender() != project.creator) revert Dcrowd_NotProjectCreator(_msgSender());
        // project is fully funded
        if (project.balance < project.goal) revert Dcrowd_ProjectNotFunded(projectId);
        // funds have not already been collected
        if (project.funded) revert Dcrowd_ProjectAlreadyFunded(projectId);
        // update storage
        _projectInfos[projectId].funded = true;
        // compute fees
        uint256 fees = (project.balance * _platformFee) / FEE_DENOMINATOR;
        uint256 valueToCreator = project.balance - fees;
        // transfer funds
        (bool success, ) = project.creator.call{value: valueToCreator, gas: 2300}("");
        if (!success) revert Dcrowd_TransferFailed(project.creator, valueToCreator);
        _feeBalance += fees;
        emit FundsCollected(projectId, project.creator, valueToCreator);
    }

    //----------------------------------------------------- funder functions

    function fundProject(uint256 projectId) external payable override {
        ProjectInfo memory project = _projectInfos[projectId];
        // value is sent
        if (msg.value == 0) revert Dcrowd_InsufficientAmount(msg.value, 1);
        // project exists
        if (project.creator == address(0)) revert Dcrowd_ProjectNotExists(projectId);
        // project not funded
        if (project.goal <= project.balance || project.funded)
            revert Dcrowd_ProjectAlreadyFunded(projectId);
        // funding not expired
        if (project.expires < block.timestamp) revert Dcrowd_ProjectFundingExpired(projectId);
        // update storage
        _projectInfos[projectId].balance += msg.value;
        _fundings[_msgSender()][projectId] += msg.value;
        emit ProjectFunded(projectId, _msgSender(), msg.value);
    }

    function cancelFunding(uint256 projectId, uint256 amount) external override {
        ProjectInfo memory project = _projectInfos[projectId];
        uint256 funding_ = _fundings[_msgSender()][projectId];
        // project exists
        if (project.creator == address(0)) revert Dcrowd_ProjectNotExists(projectId);
        // project not funded
        if (project.funded) revert Dcrowd_ProjectAlreadyFunded(projectId);
        // sender has funded
        if (funding_ < amount || amount == 0) revert Dcrowd_InsufficientAmount(amount, funding_);
        // transfer funds
        (bool success, ) = _msgSender().call{value: amount, gas: 2300}("");
        if (!success) revert Dcrowd_TransferFailed(_msgSender(), amount);
        emit FundingCancelled(projectId, _msgSender(), amount);
    }

    //----------------------------------------------------- owner functions

    function withdrawFees(address to) external override onlyOwner {
        // there are fees to transfer
        uint256 balance = _feeBalance;
        if (balance == 0) revert Dcrowd_InsufficientAmount(balance, 1);
        // cannot transfer to zero address
        if (to == address(0)) revert Dcrowd_InvalidAddress(to);
        _feeBalance = 0;
        // transfer fees
        (bool success, ) = to.call{value: balance, gas: 2300}("");
        if (!success) revert Dcrowd_TransferFailed(to, balance);
        emit FeesWithdrawn(to, balance);
    }

    function updateCreatorRating(address creator, uint8 rating) external override onlyOwner {
        _creatorRatings[creator] = rating;
        emit CreatorRatingUpdated(creator, rating);
    }

    function updateMaxFundingPeriod(uint64 newMaxFundingPeriod) external override onlyOwner {
        _maxFundingPeriod = newMaxFundingPeriod;
    }

    function updatePlatformFee(uint16 newPlatformFee) external override onlyOwner {
        if (FEE_DENOMINATOR < newPlatformFee) revert();
        _platformFee = newPlatformFee;
    }

    //----------------------------------------------------- accessor functions

    function feeBalance() external view override returns (uint256) {
        return _feeBalance;
    }

    function creatorRating(address creator) external view override returns (uint8) {
        return _creatorRatings[creator];
    }

    function projectCounter() external view override returns (uint256) {
        return _projectCounter;
    }

    function projectInfo(uint256 projectId) external view override returns (ProjectInfo memory) {
        return _projectInfos[projectId];
    }

    function projectURI(uint256 projectId) external view override returns (string memory) {
        return _uris[projectId];
    }

    function funding(address funder, uint256 projectId) external view override returns (uint256) {
        return _fundings[funder][projectId];
    }

    function maxFundingPeriod() external view override returns (uint64) {
        return _maxFundingPeriod;
    }

    function platformFee() external view override returns (uint16) {
        return _platformFee;
    }
}
