import axios from "axios"
import {config} from '../config'

const BASE = config.BASEURL

/**
 * Request class [ basically for sending api requests using the axios library]
 * params 
 */
export class Request {
  static async call(action, url, data, headers) {
    const options = {
      method: action,
      url: `${BASE}/${url}`,
      header: headers,
      data: data
    };

    try {
      console.log('3ad')
      return await axios.request(options)
    } catch (err) {
      throw err
    }
  }
}

// async function example() {
//   await Request.call("GET", 'todos/1').then(res => {
//     console.log(res.data)
//   }).catch(err => {
//     console.log()
//   }).finally( {})
// }