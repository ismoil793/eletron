import * as actions from '../actionTypes'
import {
   userInfoAPI,
   userInfoUpdateAPI,
   userLogin, userLogout,
   userRefreshToken, userRegister,
   userOrdersHistoryAPI
} from "../../api/auth";
import {notifyError, notifySuccess} from "../../helpers/NotifyBtn";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function authLogin(data) {
   return async dispatch => {
      await userLogin(data)
          .then(response => {
             const today = new Date();
             const days14 = new Date();
             const days15 = new Date();
             days14.setDate(today.getDate() + 14);
             days15.setDate(today.getDate() + 15);
             cookies.set('access_token', response.data.access_token, {
                path: '/',
                expires: days14
             });
             cookies.set("refresh_token", response.data.refresh_token, {
                path: "/",
                expires: days15
             });
             cookies.set("user_id", response.data.user_id, {
                path: "/"
             });
             dispatch({
                type: actions.AUTH_LOGIN,
                payload: true
             })
          })
          .catch(e => {
             notifyError(e.data.message, 4000)
          })
   }
}

export function authRegister(data) {
   return async dispatch => {
      await userRegister(data)
          .then(response => {
             dispatch({
                type: actions.AUTH_REGISTER,
                payload: response.data.message
             })
          })
          .catch(e => notifyError(e.data.message, 4000))
   }
}

export function refreshToken(refr_token) {
   return async dispatch => {
      await userRefreshToken(refr_token)
          .then(response => {
             const cookies = new Cookies();
             const today = new Date();
             const days14 = new Date();
             const days15 = new Date();
             days14.setDate(today.getDate() + 14);
             days15.setDate(today.getDate() + 15);
             cookies.set('access_token', response.data.access_token, {
                path: '/',
                expires: days14
             });
             cookies.set('refresh_token', response.data.refresh_token, {
                path: "/",
                expires: days15
             });
             dispatch({
                type: actions.REFRESH_TOKEN,
                payload: true
             })
          })
          .catch(e => {
             const cookies = new Cookies();
             cookies.remove('refresh_token');
             cookies.remove('user_id');
             notifyError(e.data.message, 3000)
          })
   }
}

export function authLogout() {
   const cookies = new Cookies();
   return async dispatch => {
      await userLogout(cookies.get('device_token'))
          .then(response => {
             cookies.remove("access_token", {path: "/"});
             cookies.remove("refresh_token", {path: "/"});
             cookies.remove("user_id", {path: "/"});

             notifySuccess(response.data.message);
             dispatch({
                type: actions.AUTH_LOGOUT,
                payload: false
             })

          }).catch(e => notifyError(e.data.message));
   }
}

export function clearUserRegister() {
   return async dispatch => {
      dispatch({
         type: actions.CLEAR_REGISTER,
         payload: ''
      })
   }
}

export function userInfo() {
   return async dispatch => {

      await userInfoAPI().then(response => {
         dispatch({
            type: actions.FETCH_USER,
            payload: response.data.data
         })
      }).catch(e => console.log(e));
   }
}

export function updateUserInfo(data) {
   return async dispatch => {
      await userInfoUpdateAPI(data).then(res => {
         dispatch({
            type: actions.USER_UPDATE,
            payload: res.data.data
         });
         notifySuccess('Информация о пользователе обновлена')
      }).catch(e => notifyError(e.data.message));
   }
}

export function userInfoClean() {
   return async dispatch => {
      dispatch({
         type: actions.CLEAN_USER_INFO,
         payload: {}
      })
   }
}

export function getOrdersHistory() {
   return async dispatch => {
      await userOrdersHistoryAPI().then(res => {
         dispatch({
            type: actions.FETCH_ORDERS,
            payload: res.data.data
         })
      })
   }
}