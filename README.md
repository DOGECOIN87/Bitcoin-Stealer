# Bitcoin-Stealer
Generate random bitcoin wallets & private keys (seeds) and then check if they have a positive balance using the Blockchain.info API.

# CHANGELOG
<details>
   <summary>2023-05-24</summary>
   
   - Updated the script to use Blockchain.info API for balance checking instead of comparing against a local list of addresses.
   - Removed dependency on riches.txt file.
   - Added error handling for API requests.
</details>

<details>
   <summary>2023-01-11</summary>
   
   - Now calling garbage collector to potentially stop from memory leaking
   - Releasing references to objects to allow the gc reclaim the memory
   - Loading riches.txt contents to a map() object to increase the scripts overall performance
</details>

<details>
   <summary>2022-04-04</summary>
  
   - Added a message to console when program starts, to calm down people who think the program isn't working because the console is blank.
</details>

<details>
   <summary>2021-12-09</summary>
  
   - Fixed big memory leak issue and removed extra scripts that were necessary before, that are unnecesary now.
</details>

<details>
   <summary>2021-09-26</summary>
  
   - Linux support: linux users will go to the "linux" directory to run the program.
</details>

# REQUIREMENTS
1. Install Node.js (version 12 or higher recommended)
2. Install required dependencies

# SETUP
1. Make sure you have Node.js installed. You can download it from https://nodejs.org/
2. Open a terminal or command prompt
3. Navigate to the project directory (use `cd` command)
4. Run the following command to install the required dependencies:
   ```
   npm install
   ```

# HOW TO RUN
1. Open a terminal or command prompt
2. Navigate to the project directory
3. For Windows users:
   - Run the `run.bat` file in the Windows folder
4. For Linux users:
   - Navigate to the Linux folder
   - Make the run script executable by running: `chmod +x run.sh`
   - Run the script: `./run.sh`

The program will run silently, checking generated addresses against the Blockchain.info API. It will only output when it finds an address with a positive balance, at which point it will save the details to a `Success.txt` file and exit.

# SPEED / PERFORMANCE
Results may vary depending on your internet connection and the responsiveness of the Blockchain.info API. The script now makes an API call for each generated address, which may slow down the process compared to the previous version.

# TEST IT
Go to the test folder and hit run. It will show you what would happen if a wallet with a positive balance was found.

# WHY DO THIS?
There are a lot of wallets with high balances that are lost forever, which means nobody can access them and the money is basically there just to be picked up by anyone. This program can possibly find these lost wallets and their matching private keys and take the btc out of them.

# WANT TO THANK ME?
If you would like to tip me in case you won anything or you appreciate the program, here is my BTC wallet and ETH. It will be greatly appreciated. Also you can give this project a star :)

My Bitcoin: 1B8xs4LWbwFq4Zi4pzEmjNYkTCgsUByb5L

My Ethereum: 0xe89c84A7758429b4D11a2091e1dccf7433328Fa9

# NOTE
I'm not actually responsible for what you do with this. Don't steal active wallet money, that's just wrong. Not to mention the new wallets are most likely protected much more and stuff.

# Also Note
It's almost impossible to find anything. Even though this method is not bruteforce and is creating random keys, the chances of winning are still very very low. You could get lucky though, good luck!

# Check out the new project, for ethereum!
https://github.com/Michal2SAB/Ethereum-Stealer
