import { appConfig } from "./config";
import { hex_md5 } from "./Md5";

/**
 * 签名校验
 */
export function dmCreateSign(data) {
  const timeStamp = new Date().getTime();
  /** 签名校验 */
  const secretKey = appConfig.APP_SECRET;
  const appKey = appConfig.APP_KEY;
  const paramStr = JSON.stringify(data);
  let ecodeParams = encodeURIComponent(paramStr);
  var reg1 = new RegExp("'", "g");
  var reg2 = new RegExp("~", "g");
  var reg3 = new RegExp("%C2%A0", "g");
  ecodeParams = ecodeParams.replace(reg1, "%27");
  ecodeParams = ecodeParams.replace(reg2, "%7E");
  ecodeParams = ecodeParams.replace(reg3, "%20");
  const sign =
    secretKey +
    "admjson" +
    ecodeParams +
    "appkey" +
    appKey +
    "m" +
    data.method +
    "timestamp" +
    timeStamp +
    secretKey;
  const md5SignStr = hex_md5(sign.toLowerCase());
  return {
    sign: md5SignStr,
    timestamp: timeStamp,
  };
}
