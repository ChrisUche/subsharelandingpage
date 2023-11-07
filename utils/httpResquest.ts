import * as axios from "axios"
// const api = 'http://localhost:3000'
export  const  makeRequest = async (id:number) =>{
    const response = await axios.default.get(`http://localhost:3000/risk/${id}`)
    const data = response.data
    console.log({data})
    return data
    
}