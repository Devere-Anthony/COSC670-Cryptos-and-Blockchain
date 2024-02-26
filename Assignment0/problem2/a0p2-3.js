/* Print the current price of ETH in USD and BTC */
"use strict";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

async function getEthBtc() {
    /* Get the latest ETH-BTC price 🪙 */
    try {
        const response = await axios.get('https://api.etherscan.io/api' + 
                '?module=stats' + 
                '&action=ethprice' +
                `&apikey=${process.env.ETHERSCAN_API_TOKEN}`);
        return Number(response.data.result.ethbtc);
    } catch (error) {
        console.log(error);
    }
}

async function getEthUsd() {
    /* Get the latest ETH-USD price 💰💰💰 */
    try {
        const response = await axios.get('https://api.etherscan.io/api' + 
                '?module=stats' + 
                '&action=ethprice' +
                `&apikey=${process.env.ETHERSCAN_API_TOKEN}`);
        return Number(response.data.result.ethusd);
    } catch (error) {
        console.log(error);
    }
}

const btc = await getEthBtc();
const usd = await getEthUsd();
const formatter = new Intl.NumberFormat('en-US', {   // very convenient JS, thank you
    style: 'currency',
    currency: 'USD',
});
console.log(`\nCurrent ETH price in BTC: ${btc.toFixed(5)} BTC`);
console.log(`Current ETH price in USD: ${formatter.format(usd)}\n`);