const { ethers } = require('hardhat')

async function main() {
  const contractFactory = await ethers.getContractFactory('GasvardNFT')
  const contract = await contractFactory.deploy([true])
  const receipt = await contract.deployTransaction.wait()

  console.log('Contract deployed:', receipt)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
