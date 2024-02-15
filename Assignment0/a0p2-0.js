/* a0p2-0.js - Returns the amount of ETH in a given wallet. */

const axios = require('axios');

async function getEthBalance(wallet) {
    /* Get the latest current ETH balance of the given wallet */
    try {
        const currentDate = new Date();
        const walletData = await axios.get('https://api.etherscan.io/api' +
                '?module=account' + 
                '&action=balance' +
                `&address=${wallet}` +
                '&tag=latest' +
                '&apikey=3DPEN168SKHXBW2PKYAI5KBFCTIDHTMC8G');
        const ethusdPrice = await getEthLastPrice();

        // wei -> ETH, ETH -> USD
        const ethBalance = (walletData.data.result) * (Math.pow(10,-18));    
        const usdBalance = ethBalance * ethusdPrice;

        console.log(`\nWallet Address: ${wallet}\nWallet ETH Balance: ${ethBalance}`);
        console.log(`USD Value: $${usdBalance}  (@ current price: $${ethusdPrice})`);
        console.log(`Timestamp: ${currentDate.toDateString()} ${currentDate.toTimeString()}\n`);
    } catch (error) {
        console.log(error);
    }
}

async function getEthLastPrice() {
    /* Get the latest ETH-USD price */
    try {
        const response = await axios.get('https://api.etherscan.io/api' + 
                '?module=stats' + 
                '&action=ethprice' +
                '&apikey=3DPEN168SKHXBW2PKYAI5KBFCTIDHTMC8G');
        return response.data.result.ethusd;
    } catch (error) {
        console.log(error);
    }
}

getEthBalance('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');