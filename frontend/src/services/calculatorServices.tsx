import axios from 'axios'

const httpAxios = axios.create({
   baseURL: process.env.REACT_APP_API_URL
});

export const calculateSum = (data: any) => {
   return httpAxios.post(`/calculator/addition`, data)
}