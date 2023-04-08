const { ethers , upgrades } = require("hardhat");
const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")

async function main(){
    var network = 'sepo'
    var lzEndpointAddress = LZ_ENDPOINTS[network]
    console.log("lzEndpointAddress " + lzEndpointAddress)
    const AITBasedOFT = await ethers.getContractFactory("contracts/AITBasedOFT.sol:AITBasedOFT");
    const aitBasedOFT = await AITBasedOFT.deploy(lzEndpointAddress)
    await aitBasedOFT.deployed(); 

    console.log("AITBaseOFT deployed to: ",aitBasedOFT.address)
}

main()