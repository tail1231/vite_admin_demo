/****   http.js   ****/
import request from "./request";

const http = {
  /**
   * methods: 请求方式
   * url 请求地址
   * params 请求参数
   */
  get(url, params = {}) {
    const config = {
      method: "get",
      url,
      params,
    };
    return request(config, {
      showLoading: false,
      reject: false,
    });
  },
  post(url, params = {}) {
    const config = {
      method: "post",
      url,
      data: params,
    };
    return request(config, {
      showLoading: false,
      reject: false,
    });
  },
  put(url, params = {}) {
    const config = {
      method: "put",
      url,
      params,
    };
    return request(config, {
      showLoading: false,
      reject: false,
    });
  },
  delete(url, params = {}) {
    const config = {
      method: "delete",
      url,
      params,
    };
    return request(config, {
      showLoading: false,
      reject: false,
    });
  },
};
//导出
export default http;
