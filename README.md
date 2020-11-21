# Sample MW APIs for Node JS

The sample code performs local signing and encryption using
the same code used by the official MW wallet.
Your passphrase is never sent to the remote node when submitting
a transaction.

To use the samples:
`cd mw-blockchain/sample`

- Configure the remote node and MW account by editing the config.json file
- Run the samples using Node JS, for example:

```javascript
node send.money.js
// or 
node send.message.js
```

## Warning

- Your passphrase is sent to the remote node when invoking the
startForging API or other specific APIs which require sending
the passphrase to the remote node.Don't use such APIs in your code.
- Before executing sample, make sure that the service side can be invoked properly.
- Make sure the 'LAST_KNOWN_BLOCK', 'LAST_KNOWN_TESTNET_BLOCK' in 'nrs.constants.js' are correct values
- Some parameters are not required and the notes have been indicated