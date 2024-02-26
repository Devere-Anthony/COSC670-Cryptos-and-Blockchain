/* a0p2-1.js - "How much ETH did Marlon Humphrey 🐦‍⬛ pay for Bored Ape #1880?" 
 *
 * NOTE: Figure out what to do with the API token situation before submission.
 * 
 * TODO: Make sure the transaction units make sense before submission.
 * 
 * Author: D 
 */

"use strict";
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

async function getTransactionValue(hash) {
    /* Get the value of an ETH transaction using a known transaction hash */
    try {
        if (!process.env.ETHERSCAN_API_TOKEN) {    // don't forget your 🔑, put them in .env file
            throw new Error("You forgot to set your API token.");
        }

        const response = await axios.get('https://api.etherscan.io/api' +
            '?module=proxy' +
            '&action=eth_getTransactionByHash' +
            `&txhash=${hash}` +
            `&apikey=${process.env.ETHERSCAN_API_TOKEN}`);

        // Get value of transaction and convert to decimal 
        let value = response.data.result.value;
        value = parseInt(value, 16);

        // Convert to ETH 
        const totalEth = (value) * (Math.pow(10, -18));
        return totalEth;
    } catch (error) {
        console.log(error);
    }
}

const total = await getTransactionValue('0x192336f603b8e7bef43518108c39b8fb933c8eee60c0e242655138c8206259ef');
console.log(`\nTotal ETH Marlon Humphrey spent on Bored Ape #1880: ${total} ETH\n`)
