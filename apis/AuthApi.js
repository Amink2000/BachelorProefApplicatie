import axios from 'axios'
const apiUrl = 'http://localhost:8080';
const accesToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsInJvbGUiOiJTdHVkZW50IiwiZXhwIjoxNjcwNTQyNzAyLCJpYXQiOjE2NTI1NDI3MDJ9.B_eTsGoCiMM9OQ4nxP4O3PHDokCGm7hlk3sFnC8mbxc_ZcVOnPEoubGaKVgbW2QkQy5-gNn5qy6KHjWho4fS9g"
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization : `Bearer ${accesToken}`
  }
})
export default authAxios