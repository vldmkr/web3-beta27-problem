# web3-beta27-problem
repository to demonstrate the problem in web3.js beta.27

### Point of problem

contractInstance.methods.someMethod(123).send(...) produce an error **Invalid JSON RPC response: ""**

### Description

Using binary search I found out that the problem appeared after the [6cd3885](https://github.com/ethereum/web3.js/commit/6cd3885103e69f9a0a251e73446d45e16847e9d0) commit.
The problem is that **ethAccounts** is *undefined* at the stage when it is used. For example, when the **eth_sendTransaction** Method is being created at [884](https://github.com/ethereum/web3.js/blob/6cd3885103e69f9a0a251e73446d45e16847e9d0/packages/web3-eth-contract/src/index.js#L884) line.

### Temporary solution
In *package.json* you need to set the version of **web3-eth-contract** and everything that depends on it up to version **1.0.0-beta.26**.
```json
"dependencies": {
  "web3": "1.0.0-beta.26",
  "web3-eth": "1.0.0-beta.26",
  "web3-eth-contract": "1.0.0-beta.26"
}
```
