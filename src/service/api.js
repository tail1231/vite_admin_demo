import http from "@/utils/http";

const authApi = (data = {}) => {
  return http.post("duomai.manage.seller.login", data);
};
export { authApi };
