var loader = require("./loader");
var config = loader.config;

loader.load(function (NRS) {
    // 判断引入的三个参数是否存在空字符串
    if (config.signature && config.senderPublicKey && config.message) {
        // 验签方法
        if (!NRS.verifySignature(config.signature, config.message, config.senderPublicKey, (response)=>{
            NRS.logConsole(JSON.stringify(response));
        })) {
            NRS.logConsole("VerifySignature fail");
            return;
        }
        NRS.logConsole("VerifySignature success");
    } else {
        NRS.logConsole("VerifySignature info missing");
    }

});