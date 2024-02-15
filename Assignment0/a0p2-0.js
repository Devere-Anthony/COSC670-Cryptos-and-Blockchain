/* Returns the amount of ETH in the wallet addres: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045. */

const axios = require('axios');

async function getEthBalance(wallet) {
    /* Get the latest current ETH balance of the given wallet */
    try {
        const currentDate = new Date();
        const response = await axios.get('https://api.etherscan.io/api' +
                '?module=account' + 
                '&action=balance' +
                `&address=${wallet}` +
                '&tag=latest' +
                '&apikey=3DPEN168SKHXBW2PKYAI5KBFCTIDHTMC8G');
        const ethBalance = (response.data.result) * (Math.pow(10,-18));
        console.log(`\nWallet: ${wallet}\nETH Balance: ${ethBalance}`);
        console.log(`Timestamp: ${currentDate.toDateString()} ${currentDate.toTimeString()}\n`);
    } catch (error) {
        console.log(error);
    }
}

getEthBalance('0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045');