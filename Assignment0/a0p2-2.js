/* a0p2-2.js - "How much ETH did Trey Songz transfer to the wallet address
 * 0x5e0b733905CC54989Ec7c28A07c516e51c5Afedf?" */

"use strict";
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

async function getTransactionValue(hash) {
    /* Get the value of an ETH transaction using a known transaction hash */
    try {
        if (!process.env.ETHERSCAN_API_TOKEN) {
            throw new Error("You forgot to set your API token.");
        }

        const response = await axios.get('https://api.etherscan.io/api' +
            '?module=proxy' +
            '&action=eth_getTransactionByHash' +
            `&txhash=${hash}` +
            `&apikey=${process.env.ETHERSCAN_API_TOKEN}`);

        // Convert value to decimal 
        let value = response.data.result.value;
        value = parseInt(value, 16);

        // Convert to ETH 
        const totalEth = (value) * (Math.pow(10, -18));
        return totalEth;
    } catch (error) {
        console.log(error);
    }
}

let total = await getTransactionValue('0x941bc36723200c0fbc5199f52f45340ce8bdcb645bf83f6241917d9644b5b06b');

/* Note, I check for undefined here because there was an error in the request exactly one time that was a
 * bit confusing, the error was logged to the console, but it wasn't entirely clear what had happened. 
 * It worked after retrying the request every time afterwards, so if that's the case, just output a message 
 * stating a error occurred and just try it again. 🤷🏾‍♂️ */
if (total == undefined) {
    console.log("There was an error in the request, please try again.");
} else {
    console.log(`\nTrey Songz transferred ${total} ETH to wallet 0x5e0b733905CC54989Ec7c28A07c516e51c5Afedf.\n`);
}