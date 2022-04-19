
import { POST } from "@/utils/axios.js";
import { GET } from "@/utils/axios.js";



export function login(param) {
  return POST(
    `/user/login`,
    "登录",
    param,
  );
}
export function logintext() {
  return GET(
    `/user/login-test`,
    "测试",
  );
}
//注册
export function register(param) {
  return POST(
    `/user/register`,
    "注册",
    param,
  );
}