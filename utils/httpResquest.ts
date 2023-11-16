import * as axios from "axios"
// const api = 'http://localhost:3000'
export  const  makeRequest = async (id:number) =>{
    const response = await axios.default.get(`https://node-api-d3k7.onrender.com/risk/${id}`)
    const data = response.data
    console.log({data})
    return data
    
}