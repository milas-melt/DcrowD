import { DEVELOPMENT_CHAINS, VERIFICATION_BLOCK_CONFIRMATIONS } from "../utils/const";
import verify from "../utils/verify";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployDcrowd: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, network, ethers } = hre;
    const { deploy, log } = deployments;
    const [deployer] = await ethers.getSigners();
    const waitBlockConfirmations = DEVELOPMENT_CHAINS.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS;

    const args: any[] = [];
    const dcrowd = await deploy("Dcrowd", {
        from: deployer.address,
        args: args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    });

    // Verify the deployment
    if (!DEVELOPMENT_CHAINS.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(dcrowd.address, args);
    }
};

export default deployDcrowd;
deployDcrowd.tags = ["all", "dcrowd"];
