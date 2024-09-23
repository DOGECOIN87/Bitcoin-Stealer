"use strict";

process.title = "Bitcoin Stealer by Michal2SAB";

const CoinKey = require('coinkey');
const fs = require('fs');
const https = require('https');

let privateKeyHex, ck;

async function checkBalance(address) {
    return new Promise((resolve, reject) => {
        https.get(`https://blockchain.info/q/addressbalance/${address}`, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(parseInt(data));
            });
        }).on('error', (err) => {
            console.error("Error checking balance:", err);
            reject(err);
        });
    });
}

async function generate() {
    // generate random private key hex
    let privateKeyHex = r(64);
    
    // create new bitcoin key pairs
    let ck = new CoinKey(Buffer.from(privateKeyHex, 'hex'));
    
    ck.compressed = false;
    //console.log(ck.publicAddress)
    // Remove "//" in line above if you wanna see the logs, but remember it's gonna slow down the process a lot
    
    try {
        const balance = await checkBalance(ck.publicAddress);
        
        // if generated wallet has a positive balance, tell us we won!
        if (balance > 0) {
            console.log("");
            process.stdout.write('\x07');
            console.log("\x1b[32m%s\x1b[0m", ">> Success: " + ck.publicAddress);
            console.log("\x1b[32m%s\x1b[0m", ">> Balance: " + balance + " satoshis");
            var successString = "Wallet: " + ck.publicAddress + "\n\nSeed: " + ck.privateWif + "\n\nBalance: " + balance + " satoshis";
                
            // save the wallet and its private key (seed) to a Success.txt file in the same folder 
            fs.writeFileSync('./Success.txt', successString, (err) => {
                if (err) throw err; 
            })
                
            // close program after success
            process.exit();
        }
    } catch (error) {
        console.error("Error in generate function:", error);
    }
    
    // destroy the objects
    ck = null;
    privateKeyHex = null;
}

// the function to generate random hex string
function r(l) {
    let randomChars = 'ABCDEF0123456789';
    let result = '';
    for ( var i = 0; i < l; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

console.log("\x1b[32m%s\x1b[0m", ">> Program Started and is working silently (edit code if you want logs)"); // don't trip, it's working
// run forever
(async function() {
    while(true) {
        await generate();
        if (process.memoryUsage().heapUsed / 1000000 > 500) {
            global.gc();
        }
        //console.log("Heap used : ", process.memoryUsage().heapUsed / 1000000);
    }
})();
