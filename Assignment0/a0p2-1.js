/* a0p2-1.js - "How much ETH did Marlon Humphrey 🐦‍⬛ pay for Bored Ape #1880?" 
 *
 * NOTE: Figure out what to do with the API token situation before submission.
 * 
 * Author: D
 */

const axios = require('axios');
require("dotenv").config();

async function getTransactions(address, startblock=0, endblock=99999999, page=1, offset=10,
        sort='asc') {
    /* Get a list of transactions for the given address by searching for a particular block. 
     * Default values will search the entire chain. */
    try {
        if (!process.env.ETHERSCAN_API_TOKEN) {    // don't forget your 🔑, put them in .env file
            throw new Error("You forgot to set your API token.");
        }

        const response = await axios.get('https://api.etherscan.io/api' + 
            '?module=account' + 
            '&action=txlist' + 
            `&address=${address}` +
            `&startblock=${startblock}` + 
            `&endblock=${endblock}` +
            `&page=${page}` +
            `&offset=${offset}` + 
            `&sort=${sort}`+ 
            `&apikey=${process.env.ETHERSCAN_API_TOKEN}`);

        const totalEth = (response.data.result[0].value) * (Math.pow(10,-18));    
        console.log(`\nTotal ETH spent on Bored Ape #1880: ${totalEth} ETH\n`)
    } catch (error) {
        console.log(error);
    }
}

// Get the transaction information for MarlonHumphrey.eth at the block 13143620. According to Etherscan
// this transaction has the hash: 0x192336f603b8e7bef43518108c39b8fb933c8eee60c0e242655138c8206259ef
getTransactions('0x87a8C74DFA32e09700369584F5dFAD1b5b653E2C', startblock=13143620, endblock=13143620);