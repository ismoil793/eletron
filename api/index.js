import * as axios from 'axios';
import Cookies from 'universal-cookie';
import url from './url'
import {notifyError, notifyWarn} from "../helpers/NotifyBtn";
import Router from "next/router";

const httpClient = axios.create({
   baseURL: url
   // withCredentials: true
});



httpClient.interceptors.request.use(
    config => {
       const cookie = new Cookies();

       let token = cookie.get("access_token");
       let device_token = cookie.get('device_token');
       let device_type = cookie.get('device_type');

       if (token) {
          config.headers.Authorization = `Bearer ${token}`;
       }
       if(device_token) {
          config.headers['Device-Token'] = device_token
       }
       if(device_type) {
          config.headers['Device-Type'] = device_type
       }

       return config
    },
    error => Promise.reject(error)
);



httpClient.interceptors.response.use((response) => {

   const { status, data, statusText } = response;

   return response;

}, ({ response }) => {

   const { status, data, statusText } = response ? response : {status: false};
   const cookies = new Cookies();

   if (!response) {
      notifyError('Ошибка соединения!');
      return connectionError('Ошибка соединения!', this);
   }

   if (parseInt(status) === 401 || parseInt(status) === 403) {
      const cookies = new Cookies();
      cookies.remove("access_token", { path: '/' });
      cookies.remove("refresh_token", { path: '/' });
      cookies.remove("user_id", { path: '/' })
   }

   if (parseInt(status) === 400 && data.code === 11) {
      notifyWarn(data.message)
   }
   if (parseInt(status) === 400 && data.code === 10) {
      notifyWarn(data.message)
   }

   if (parseInt(status) === 404) {
      notifyWarn(data.message);
      Router.push({
         pathname: `/404`
      })
   }

   if (parseInt(status) === 429) {
      notifyWarn('Вы делаете слишком много запросов на сервер. Пожалуйста подождите 1 минуту и продолжите.');
   }

   if (parseInt(status) === 500) {
      notifyError('Произошла ошибка на сервере');
   }

   return Promise.reject(response);
});


export const httpGet = (params) => httpClient.request({
   method: 'get',
   ...params
});

export const httpPost = (params) => httpClient.request({
   method: 'post',
   ...params
});

/*
export const httpDelete = (params) => httpClient({
  method: 'delete',
  ...params
});
*/

export const httpDelete = (params) => httpClient.request({
   method: 'delete',
   ...params
});