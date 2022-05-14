import axios from 'axios'
const apiUrl = 'http://localhost:8080';
const accesToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsInJvbGUiOiJTdHVkZW50IiwiZXhwIjoxNjUyNTM1NzI5LCJpYXQiOjE2NTI1MTc3Mjl9.ih8u9h8DOS2XV0Iz4n4ZGk4zCKrjewTZAsOmHjTUCUOBq62VcDFIJ1VdEsL-Ravii_jiCNZnP5RBwbxAmtkGJQ"
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization : `Bearer ${accesToken}`
  }
})
export default authAxios