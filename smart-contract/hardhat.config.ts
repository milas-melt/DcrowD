import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";
import "dotenv/config";
import "solidity-coverage";
import "hardhat-deploy";
import "solidity-coverage";

const SECRET_KEY_1 = process.env.SECRET_KEY_1 || "";
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL || "";
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "";

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // forking: {
            //   url: POLYGON_RPC_URL
            // },
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        polygonMumbai: {
            url: MUMBAI_RPC_URL,
            accounts: [SECRET_KEY_1],
            saveDeployments: true,
            chainId: 80001,
        },
        polygon: {
            url: POLYGON_RPC_URL,
            accounts: [SECRET_KEY_1],
            saveDeployments: true,
            chainId: 137,
        },
    },

    solidity: {
        compilers: [
            {
                version: "0.8.17",
            },
        ],
    },

    etherscan: {
        apiKey: {
            polygon: POLYGONSCAN_API_KEY,
            polygonMumbai: POLYGONSCAN_API_KEY,
        },
        // customChains: [
        //     {
        //         network: "mumbai",
        //         chainId: 80001,
        //         urls: {
        //             apiURL: "https://api-goerli.etherscan.io/api",
        //             browserURL: "https://goerli.etherscan.io",
        //         },
        //     },
        // ],
    },

    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },

    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
};

export default config;
