# ait-smart-contracts

## Deploy
1. Add a .env file (to the root project directory) with your ADMIN="" and fund your wallet in order to deploy!
2. Deploy two contracts: AITBasedOFT.sol in the sepolia. AITOFT in the bsc-testnet
```angular2html
npx hardhat run --network sepo scripts/deploy_aitbasedoft.js
npx hardhat run --network bsc-testnet scripts/deploy_aitoft.js
```
3. Deploy contract pool in the sepolia and bsc-tesnet
```angular2html
npx hardhat run --network sepo scripts/deploy_pool.js
npx hardhat run --network bsc-testnet scripts/deploy_pool.js
```
