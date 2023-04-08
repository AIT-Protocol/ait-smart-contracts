const { ethers , upgrades } = require("hardhat");
const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")

async function main(){
    var network = 'bsc-testnet'
    var lzEndpointAddress = LZ_ENDPOINTS[network]
    console.log("lzEndpointAddress " + lzEndpointAddress)
    const AITOFT = await ethers.getContractFactory("contracts/AITOFT.sol:AITOFT");
    const aitoft = await AITOFT.deploy(lzEndpointAddress)
    await aitoft.deployed(); 

    console.log("AITOFT deployed to: ",aitoft.address)
}

main()