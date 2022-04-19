// import { service } from "@/utils/request.js";

// const login = (data) => {
//   return service({
//     url: "/user/login",
//     method: "POST",
//     data,
//   });
// };

// export { login };
import { POST } from "@/utils/request.js";
import { GET } from "@/utils/request.js";



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