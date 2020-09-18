import axios from 'axios'
import {message} from "antd";

export default  function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject) =>{
        let promis
        if(type === 'GET'){
            promis = axios.get(url,{
                params:data
            })
        }else {
            promis = axios.post(url,data)
        }
        promis.then(response => {
            resolve(response)
        }).catch(error =>{
            message.error('请求出错：' + error.message)
        })
    })
}

