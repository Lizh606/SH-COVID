const TOKEN_TIMEOUT_VALUE = 2 * 3600 * 1000 ;


const getTimeStamp = () => {
    return window.localStorage.getItem("TimeStamp");
}
const isCheckTimeout = () =>{
    //当前时间戳
    const currentTime = Date.now();
    //登录时间戳
    const timeStamp = getTimeStamp();
    return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
export  default  isCheckTimeout
