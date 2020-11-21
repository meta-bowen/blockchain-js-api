# MW API 示例

示例代码使用与官方MW钱包相同的代码执行本地签名和加密。在提交事务时，您的密码不会被发送到远程节点。

使用 samples:
`cd mw-blockchain/sample`

- 通过编辑json配置文件来配置远程节点和MW帐户
- 使用Node JS运行示例:

```javascript
node send.money.js
//or
node send.message.js
```

## 注意事项

- 在调用start锻造API或其他需要将密码短语发送到远程节点的特定API时，密码短语将被发送到远程节点。不要在代码中使用这样的api
- 在执行sample之前，请确保可以正确调用服务端
- 确保`nrs.constants.js`中的`LAST_KNOWN_BLOCK`,`LAST_KNOWN_TESTNET_BLOCK`为正确值
- 部分参数非必填，注释已注明