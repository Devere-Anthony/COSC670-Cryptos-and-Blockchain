/* Print the current price is USD for BTC, ETH, SOL, ADS and then 
 * print the price of Bitcoin on different dates */
"use strict";
import axios from "axios";

function titleCase(word) {
    /* Idk why JS doesn't have this actually built-in, unless I missed it */
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

const formatter = new Intl.NumberFormat('en-US', {
    /* Use a JS class to change the currency display format */
    style: 'currency',
    currency: 'USD',
});

/* Let's print out those USD prices for some coins */
await axios.get("https://api.coingecko.com/api/v3/coins/markets" +
    "?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana%2C%20cardano" +
    "&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then(response => {
        console.log("\nCurrent Price in USD for:");
        let border = "-";
        console.log(border.repeat(25));

        // Iterate over data array and display results
        for (let i = 0; i < response.data.length; i++) {
            console.log(`${titleCase(response.data[i].id)} (${response.data[i].symbol.toUpperCase()}):` +
             `${formatter.format(response.data[i].current_price)}`);
        }
        console.log();
    })
    .catch(error => { console.log(error); });

/* Now let's print some BTC prices over the years */
// TODO: Convert UTC to EST
console.log("Date\t\t\tPrice");
let border = "-";
console.log(border.repeat(30));
await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-03-2020")
    .then(response => {
        console.log("1 MAR 2020:\t\t" + formatter.format(response.data.market_data.current_price.usd));
    })
    .catch (error => console.log(error));

await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-03-2020")
    .then(response => {
        console.log("30 MAR 2020:\t\t" + formatter.format(response.data.market_data.current_price.usd));})
    .catch (error => console.log(error));

await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-05-2017")
    .then(response => {
        console.log("17 MAY 2017:\t\t" + formatter.format(response.data.market_data.current_price.usd));})
    .catch (error => console.log(error))

await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/history?date=13-07-2022")
    .then(response => {
        console.log("13 JULY 2022:\t\t" + formatter.format(response.data.market_data.current_price.usd));})
    .catch (error => console.log(error))