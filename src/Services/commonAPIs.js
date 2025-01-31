import axios from 'axios'
export const commonAPI = async (httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig ={
        method:httpRequest,
        url,
        data:reqBody,
        header:reqHeader ? reqHeader:{
            "Content-Type" :'application/json'
        }
    }
    return await axios(reqConfig).then((response)=>{
        return response
    })
    .catch((error)=>{
        return error
    })
}