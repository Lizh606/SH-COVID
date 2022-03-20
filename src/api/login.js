import { service } from "@/utils/request.js";

const login = (data) => {
  return service({
    url: "/user/login",
    method: "POST",
    data,
  });
};

export { login };
