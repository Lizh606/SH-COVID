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

export function login(param) {
  return POST(
    `/user/login`,
    "登录",
    param,
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