import axios from "axios";
import { appConfig } from "./config";
import { message as AntvMessage } from "ant-design-vue";
import { usePermissioStore } from "@/store/modules/permission";
import { dmCreateSign } from "./createSign";
import { TIME_OUT, getToken } from "./config";

const _usePermissioStore = usePermissioStore();

function request(axiosConfig, options) {
  const instance = axios.create({
    baseURL: `${
      process.env.NODE_ENV === "development"
        ? import.meta.env.VITE_APP_BASE_API
        : "/g2/router/api"
    }?mix_nick=${_usePermissioStore.getMixNick}`,
    timeout: TIME_OUT,
  });

  const { sign, timestamp } = dmCreateSign(axiosConfig);

  const params = {
    data: {
      jsonrpc: "2.0",
      method: axiosConfig.url,
      params: {
        admjson: {
          ...axiosConfig.data,
          method: axiosConfig.url,
        },
        commomParameter: {
          appkey: appConfig.APP_KEY,
          m: axiosConfig.method,
          sign,
          timestamp,
        },
      },
    },
    method: axiosConfig.method,
    header: {
      "content-type": "application/json",
    },
  };

  console.log("请求参数", params);

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 携带token && 兼容ssr的环境
      if (getToken() && typeof window !== "undefined") {
        config.headers.Authorization = getToken(); // 携带在请求头中
        //   config.params = { token: getToken() }; // 携带在参数中
      }
      return config;
    },
    (error) => {
      // 对请求错误做些什么
      console.log("请求拦截失败");
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // 对响应数据做点什么
      const res = response.data;
      return res;
    },
    (error) => {
      // 对响应错误做点什么
      handleRequestErrorStatus(error);
      return Promise.reject(error);
    }
  );

  return instance(params);
}

export default request;

/**
 * 处理异常
 */

function handleRequestErrorStatus(error) {
  // 处理被取消的请求
  if (axios.isCancel(error))
    return console.error("请求的重复请求：" + error.message);
  let message = "";
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = "接口重定向了！";
        break;
      case 400:
        message = "参数不正确！";
        break;
      case 401:
        message = "您未登录，或者登录已经超时，请先登录！";
        break;
      case 403:
        message = "您没有权限操作！";
        break;
      case 404:
        message = `请求地址出错: ${error.response.config.url}`;
        break; // 在正确域名下
      case 408:
        message = "请求超时！";
        break;
      case 409:
        message = "系统已存在相同数据！";
        break;
      case 500:
        message = "服务器内部错误！";
        break;
      case 501:
        message = "服务未实现！";
        break;
      case 502:
        message = "网关错误！";
        break;
      case 503:
        message = "服务不可用！";
        break;
      case 504:
        message = "服务暂时无法访问，请稍后再试！";
        break;
      case 505:
        message = "HTTP版本不受支持！";
        break;
      default:
        message = "异常问题，请联系管理员！";
        break;
    }
  }
  if (error.message.includes("timeout")) message = "网络请求超时！";
  if (error.message.includes("Network"))
    message = window.navigator.onLine ? "服务端异常！" : "您断网了！";

  AntvMessage.error(message);
}
