import axios from "axios";

function titleCase(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

axios.get("https://api.coingecko.com/api/v3/coins/markets" +
    "?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana%2C%20cardano" +
    "&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then(response => {
        console.log("\nCurrent Price in USD for:");
        let border = "-";
        console.log(border.repeat(25));

        // put this guy in a for loop
        for (let i = 0; i < response.data.length; i++) {
            console.log(`${titleCase(response.data[i].id)}: ${formatter.format(response.data[i].current_price)}`);
        }
        console.log();
    })
    .catch(error => {
        console.log(error);
    })
