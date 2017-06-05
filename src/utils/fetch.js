/*eslint-disable*/
import axios from 'axios';
import Qs from 'qs';

const Headers = {
  Accept: 'Accept',
};

axios.defaults.baseURL = 'http://222.191.251.226:8081/yuqing';
axios.defaults.headers.common[Headers.Accept] = 'application/json, text/javascript, */*; q=0.01';
axios.defaults.timeout = 5000;

axios.interceptors.request.use((config) => {
  config.data = Qs.stringify(config.data);
  return config;
}, error => Promise.reject(error));
axios.interceptors.response.use(response => response, error => Promise.reject(error));

export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
         .then(response => {
           resolve(response.data)
         })
         .catch(error => {
           reject(error)
         })
  })
}

export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params })
         .then(response => {
           resolve(response.data)
         })
         .catch(error => {
           reject(error)
         })
  })
}

