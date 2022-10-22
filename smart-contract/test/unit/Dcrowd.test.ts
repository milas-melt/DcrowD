import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { assert, expect } from "chai";
import { network, ethers } from "hardhat";
import { DEVELOPMENT_CHAINS } from "../../utils/const";
import { Dcrowd, Dcrowd__factory } from "../../typechain-types";
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

!DEVELOPMENT_CHAINS.includes(network.name)
  ? describe.skip
  : describe("Dcrowd Unit Tests", function () {
      async function deployDcrowdFixtures() {
        // get signers
        const [deployer, creator, funder] = await ethers.getSigners();
        // deploy Dcrowd
        const Dcrowd: Dcrowd__factory = await ethers.getContractFactory("Dcrowd");
        const dcrowd = await Dcrowd.connect(deployer).deploy();
        await dcrowd.deployed();
        return { dcrowd, deployer, creator, funder };
      }

      describe("constructor()", () => {});

      describe("createProject()", () => {
        let now: BigNumber, goal: BigNumber;
        const uri = "aopurht-q9384tihng[er0u-q084 ty0q834yt=  ]0piefkn";
        beforeEach(() => {
          now = BigNumber.from(Math.round(new Date().getTime() / 1000));
          goal = ethers.utils.parseEther("0.37");
        });
        it("reverts if expires is before now", async () => {
          const { dcrowd, creator } = await loadFixture(deployDcrowdFixtures);
          now = now.sub(10);
          const error = `Dcrowd_InvalidExpires(${now.toString()})`;
          await expect(dcrowd.connect(creator).createProject(now, goal, uri)).to.be.revertedWith(
            error
          );
        });
        it("reverts if expires if after max funding period", async () => {
          const { dcrowd, creator } = await loadFixture(deployDcrowdFixtures);
          const max = await dcrowd.maxFundingPeriod();
          now = now.add(max).add(10);
          const error = `Dcrowd_InvalidExpires(${now.toString()})`;
          await expect(dcrowd.connect(creator).createProject(now, goal, uri)).to.be.revertedWith(
            error
          );
        });
        it("updates storage", async () => {
          const { dcrowd, creator } = await loadFixture(deployDcrowdFixtures);
          const projectId = await dcrowd.projectCounter();
          now = now.add(10);
          await dcrowd.connect(creator).createProject(now, goal, uri);
          expect(await dcrowd.projectURI(projectId)).to.be.equal(uri);
          const project = await dcrowd.projectInfo(projectId);
          assert.equal(project.creator, creator.address);
          assert(project.expires.eq(now));
          assert(!project.funded);
          assert(project.goal.eq(goal));
          assert(project.balance.eq(0));
        });
        it("emits an event", async () => {
          const { dcrowd, creator } = await loadFixture(deployDcrowdFixtures);
          now = now.add(10);
          const projectId = await dcrowd.projectCounter();
          await expect(dcrowd.connect(creator).createProject(now, goal, uri))
            .to.emit(dcrowd, "ProjectCreated")
            .withArgs(projectId, creator.address, now, goal, uri);
        });
      });

      describe("collectFunds()", () => {
        let dcrowd: Dcrowd, creator: SignerWithAddress, funder: SignerWithAddress;
        let projectId: BigNumber, now: BigNumber, goal: BigNumber, uri: string;
        let funds: BigNumber;
        beforeEach(async () => {
          ({ dcrowd, creator, funder } = await loadFixture(deployDcrowdFixtures));
          now = BigNumber.from(Math.round(new Date().getTime() / 1000));
          now = now.add(10);
          goal = ethers.utils.parseEther("0.37");
          uri = "-0q834hgn-q09u =20io jrgpouyq- 348";
          projectId = await dcrowd.projectCounter();
          await dcrowd.connect(creator).createProject(now, goal, uri);
          funds = goal.add(1000);
          await dcrowd.connect(funder).fundProject(projectId);
        });
        it.skip("reverts if sender is not creator", async () => {});
        it.skip("reverts if project is not fully funded", async () => {});
        it.skip("reverts if funds have already been collected", async () => {});
        it.skip("updates project info", async () => {});
        it.skip("transfers funds - fees to creator", async () => {});
        it.skip("adds fees to fee balance", async () => {});
        it.skip("emits an event", async () => {});
      });

      describe("fundProject()", () => {
        let dcrowd: Dcrowd, creator: SignerWithAddress, funder: SignerWithAddress;
        let projectId: BigNumber, now: BigNumber, goal: BigNumber, uri: string;
        let funds: BigNumber;
        beforeEach(async () => {
          ({ dcrowd, creator, funder } = await loadFixture(deployDcrowdFixtures));
          now = BigNumber.from(Math.round(new Date().getTime() / 1000));
          now = now.add(10);
          goal = ethers.utils.parseEther("0.37");
          uri = "-0q834hgn-q09u =20io jrgpouyq- 348";
          projectId = await dcrowd.projectCounter();
          await dcrowd.connect(creator).createProject(now, goal, uri);
          funds = ethers.utils.parseEther("0.1");
        });
        it("reverts if no funds are sent", async () => {
          const error = `Dcrowd_InsufficientAmount(0, 1)`;
          await expect(dcrowd.connect(funder).fundProject(projectId)).to.be.revertedWith(error);
        });
        it("reverts if project doesn't exist", async () => {
          projectId = projectId.add(1);
          const error = `Dcrowd_ProjectNotExists(${projectId.toString()})`;
          await expect(
            dcrowd.connect(funder).fundProject(projectId, { value: funds })
          ).to.be.revertedWith(error);
        });
        it("reverts if project's funding goal has been reached", async () => {
          funds = goal.add(100000);
          await dcrowd.connect(funder).fundProject(projectId, { value: funds });
          const error = `Dcrowd_ProjectAlreadyFunded(${projectId.toString()})`;
          funds = BigNumber.from(1);
          await expect(
            dcrowd.connect(funder).fundProject(projectId, { value: funds })
          ).to.be.revertedWith(error);
        });
        it("reverts if the project has been funded", async () => {
          funds = goal.add(100000);
          await dcrowd.connect(funder).fundProject(projectId, { value: funds });
          await dcrowd.connect(creator).collectFunds(projectId);
          const error = `Dcrowd_ProjectAlreadyFunded(${projectId.toString()})`;
          funds = BigNumber.from(1);
          await expect(
            dcrowd.connect(funder).fundProject(projectId, { value: funds })
          ).to.be.revertedWith(error);
        });
        it.skip("reverts if funding has expired", async () => {});
        it("updates the project funding balance", async () => {
          await dcrowd.connect(funder).fundProject(projectId, { value: funds });
          const project = await dcrowd.projectInfo(projectId);
          assert(project.balance.eq(funds));
        });
        it("updates the funding of the funder", async () => {
          await dcrowd.connect(funder).fundProject(projectId, { value: funds });
          const funding = await dcrowd.funding(funder.address, projectId);
          assert(funding.eq(funds));
        });
        it("emits an event", async () => {
          await expect(dcrowd.connect(funder).fundProject(projectId, { value: funds }))
            .to.emit(dcrowd, "ProjectFunded")
            .withArgs(projectId, funder.address, funds);
        });
      });

      describe("cancelFunding()", () => {});
    });
