import axios from 'axios'

import config from './config'
import './interceptors'
import { addPrefix, parseUrl } from './utils'

const Api = {}

const axiosApi = () =>{
  config.map(item => {
    Api[item.name] = options => {
      let url = item.url
      url = options && options.query ? parseUrl(url, options.query) : url
      url = item.noPrefix ? url : addPrefix(url)

      return axios(Object.assign({}, item, options, { url }))
    }
    
    return item
  })
}

axiosApi()

export default Api