import axios from 'axios'
const apiUrl = 'http://localhost:8080';
const accesToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsInJvbGUiOiJTdHVkZW50IiwiZXhwIjoxNjUyMzYxNjM3LCJpYXQiOjE2NTIzNDM2Mzd9.tx84zeK3J5rLR3t6FGOjAIktY2qbRheXgQ5jgZsblz0IJUqR0m5O_i6mzHiK1EOoPIFr6HR9SQDTsAQRo2e_ZQ'
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization : `Bearer ${accesToken}`
  }
})
export default authAxios