import axios from 'axios'
const apiUrl = 'http://localhost:8080';
const accesToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsInJvbGUiOiJTdHVkZW50IiwiZXhwIjoxNjUyMjAxNDg1LCJpYXQiOjE2NTIxODM0ODV9.i2ymBhK-N0gfyC9P8r7N3B3B-FxX_ydeG5p3mhqt0QwvTjDFIE9OKsa6qZmQM7mOsl85_6mhuPfHnedkGQpgTQ'
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization : `Bearer ${accesToken}`
  }
})
export default authAxios