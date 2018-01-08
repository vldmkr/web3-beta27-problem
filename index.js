const Web3 = require('web3')

const account = {
  "privateKey": "0x97b59df74d925245dfc10b2f487116f21b3eede6f1033afef9174feb3b776c98",
  "address": "0x434559788E97c5721b39A6E16aC5c0a6bFD3d04b"
}

const contract = {
  "address": "0x68b88b83c4539dcde66a0462ddb51a145b357287",
  "interface": [
    {
      "constant": true,
      "inputs": [],
      "name": "value",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}

const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'))
web3.eth.accounts.wallet.add(account.privateKey)

const SimpleStorageContract = new web3.eth.Contract(contract.interface, contract.address)

SimpleStorageContract.methods.setValue(12345)
  .send({ 
    from: account.address,
    gas: 50000
  }).then(receipt => {
    console.log(receipt)

    SimpleStorageContract.methods.value()
      .call({ from: account.address })
      .then(console.log);
  })
  .catch(console.log)
