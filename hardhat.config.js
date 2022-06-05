require('@nomiclabs/hardhat-waffle')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/e75a8ac3a7834893b4bb7e46a8be02ec',
      chainId: 4,
      gasPrice: 4 * 10 ** 9,
      gasMultiplier: 1.1,
      accounts: [
        '31b00d167be21e86d927391f96ffa2cc1668307c36947950d5841d0fcb96173b',
      ],
    },
  },
}
