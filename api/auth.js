import {httpGet, httpPost} from "./index";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const userRegister = (data) => httpPost({
   url: '/api/auth/register/',
   params: {},
   data
});

export const userLogin = (data) => httpPost({
   url: '/api/auth/login/',
   data
});

export const userRefreshToken = (rt) => httpPost({
   url: '/api/auth/refresh/token/',
   data: {
      refresh_token: rt,
      provider: 'users'
   }
});

export const userLogout = (dt) => httpGet({
   url: '/api/auth/logout/',
   headers: {
      'Device-Token': dt
   }
});

export const userInfoAPI = () => httpGet({
   url: '/api/user/info/'
});

export const userInfoUpdateAPI = (data) => httpPost({
   url: '/api/user/info/update',
   data
});

export const userOrdersHistoryAPI = () => httpGet({
   url: '/api/user/orders'
});