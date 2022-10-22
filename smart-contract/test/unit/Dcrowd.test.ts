import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { network, ethers } from "hardhat";
import { DEVELOPMENT_CHAINS } from "../../utils/const";
import { Dcrowd__factory } from "../../typechain-types";

!DEVELOPMENT_CHAINS.includes(network.name)
  ? describe.skip
  : describe("Dcrowd Unit Tests", function () {
      async function deployDcrowdFixtures() {
        // get signers
        const [deployer, creator, funder] = await ethers.getSigners();
        // deploy Dcrowd
        const Dcrowd: Dcrowd__factory = await ethers.getContractFactory("Dcrowd");
        const dcrowd = await Dcrowd.deploy();
        await dcrowd.deployed();
        return { dcrowd, deployer, creator, funder };
      }

      describe("createProject()", () => {});

      describe("collectFunds()", () => {});

      describe("fundProject()", () => {});

      describe("cancelFunding()", () => {});
    });
