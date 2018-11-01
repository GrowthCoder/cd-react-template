import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(config => {
  console.log(config)
  Toast.loading('加载中', 0)
  return config
}, error => Promise.reject(error))

axios.interceptors.response.use(res => (Toast.hide(), res), 
  error => {
    return Promise.reject(error.error);
  })