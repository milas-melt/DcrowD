import { ethers } from "hardhat";
import { BigNumber, utils } from "ethers";
import { Dcrowd } from "../typechain-types";
const parseEther = utils.parseEther;

async function fundProject() {
    console.log("funding project...");
    // get contract
    const dcrowd: Dcrowd = await ethers.getContract("Dcrowd");

    // params
    const projectId = BigNumber.from(11);
    const amount = parseEther("0.01");

    // create project
    const tx = await dcrowd.fundProject(projectId, { value: amount });
    const receipt = await tx.wait(1);
    console.log("done.");
}

fundProject()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
