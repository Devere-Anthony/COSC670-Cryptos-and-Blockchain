/* a0p2-1.js - "How much ETH did Marlon Humphrey 🐦‍⬛ pay for Bored Ape #1880?" 
 * 
 * Author: D
 */

const axios = require('axios');
require("dotenv").config();

async function getInternalTransaction(hash) {
    /* Get the internal transactions peformed within a transaction with 
     * the given transaction hash. */
    try {
        if (!process.env.ETHERSCAN_API_TOKEN) {    // don't forget your 🔑
            throw new Error("You forgot to set API token.");
        }
        const response = await axios.get('https://api.etherscan.io/api' +
                '?module=account' +
                '&action=txlistinternal' + 
                '&txhash=0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170' +
                `&apikey=${process.env.ETHERSCAN_API_TOKEN}`);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getInternalTransaction('0xbfe65cc2a2d3b6109ae5665c5d38c74c1035719506c60275390983a38f460b8b');