const { ethers , upgrades } = require("hardhat");
const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")
const CHAINID = require("../constants/chainIds.json")
const AITTOKEN = require("../constants/aitToken.json")
async function main(){
    var network = 'sepo'
    var lzEndpointAddress = LZ_ENDPOINTS[network]
    var chainId = CHAINID[network]
    var aittoken = AITTOKEN[network]
    console.log("lzEndpointAddress " + lzEndpointAddress)
    console.log("ChainId " + chainId)
    console.log("AIT Token " + aittoken)
    const Pool = await ethers.getContractFactory("contracts/Pool.sol:Pool");
    // Deploy single contract
    const pool = await Pool.deploy(lzEndpointAddress, aittoken, chainId)
    await pool.deployed(); 
    //End Deploy single contract

    console.log("Pool deployed to: ",pool.address)
}

main()