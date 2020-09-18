import ajax from "./ajax";
import jsonp from 'jsonp'
import {message} from 'antd'

export const reqLogin = (username, password) => ajax('/login',{username,password},'POST')
export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')
export const reqCategorys = (parentId) =>ajax('/manage/category/list',{parentId})
export const reqAddCategorys = (categoryName,parentId) =>ajax('/manage/category/add',{categoryName,parentId},'POST')
export const reqUpdateCategorys = (categoryName,categoryId) =>ajax('/manage/category/update',{categoryName,categoryId},'POST')


export const reqWeather = (city) => {
    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url,{},(err, data) =>{
            if (!err && data.status==="success"){
                const {date, weather} = data.results[0].weather_data[0]
                resolve({date, weather})
            }else {
                message.error('获取天气失败')
            }
        })
    })
}
