import { ethers } from "hardhat";
import { BigNumber, utils } from "ethers";
import { Dcrowd } from "../typechain-types";
const parseEther = utils.parseEther;

async function createProject() {
    console.log("creating project...");
    // get contract and signers
    const dcrowd: Dcrowd = await ethers.getContract("Dcrowd");
    // const [deployer, creator] = await ethers.getSigners();

    // params
    const now = BigNumber.from(Math.round(new Date().getTime() / 1000));
    const expires = now.add(30 * 3600 * 24); // 30 days
    const goal = parseEther("10.1"); // 10.1 ETH
    const uri =
        "https://imgs.search.brave.com/7W2mfZ66KeXr0gH-2es4OoK9Y41JdrOXJxOJ8ZGiYyo/rs:fit:768:705:1/g:ce/aHR0cHM6Ly9jcnlw/dG9jdXJyZW5jeWti/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8xMS9XaGVu/LVlvdS1NZWV0LVNv/bWVvbmUtV2hvcy1J/bnRvLUNyeXB0by1G/b3ItVGhlLUZpcnN0/LVRpbWUtQ3J5cHRv/LU1lbWVzLTc2OHg3/MDUuanBn";

    // create project
    const tx = await dcrowd
        // .connect(creator)
        .createProject(expires, goal, uri);
    const receipt = await tx.wait(1);
    console.log("done.");
}

createProject()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
