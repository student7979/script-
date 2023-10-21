import { ethers } from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";
//const provider = ethers.getDefaultProvider();
let httpProvider = new ethers.providers.JsonRpcProvider();


// To connect to a custom URL:
let url = 
let arburl = 
let opurl = 
let zkurl = "https://mainnet.era.zksync.io";
const provider = new ethers.providers.JsonRpcProvider(url);

const main = async () => {
    const balance = await provider.getBalance('');
    console.log(`ETH Balance of me: ${ethers.utils.formatEther(balance)} ETH`);
    console.log("\n GAS price now")
    const gasPrice = await provider.getGasPrice();
    console.log(ethers.utils.formatUnits(gasPrice,'gwei'));
}




main()
