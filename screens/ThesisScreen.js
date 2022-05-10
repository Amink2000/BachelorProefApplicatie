import { StyleSheet, Button, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';

import { Text, View } from '../components/Themed';
import { IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor } from 'react-native-axios-jwt'
import axios from 'axios'
import {useState, useEffect } from 'react';
import ThesisApi from '../apis/ThesisApi';
import ThesisCard from '../components/ThesisCard';
import { get } from 'react-hook-form';

const apiUrl = 'http://localhost:8080';
const accesToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsInJvbGUiOiJTdHVkZW50IiwiZXhwIjoxNjUyMjAxNDg1LCJpYXQiOjE2NTIxODM0ODV9.i2ymBhK-N0gfyC9P8r7N3B3B-FxX_ydeG5p3mhqt0QwvTjDFIE9OKsa6qZmQM7mOsl85_6mhuPfHnedkGQpgTQ'
const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization : `Bearer ${accesToken}`
  }
})

export default function FavouriteScreen({navigation}){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    authAxios.get("/thesis/all")
    .then(({ data }) => {
        console.log("defaultApp -> data", data)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
}, []);

return (
  <SafeAreaView>
            <FlatList data={data}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <ThesisCard item = {item}/>
                }}
            />
        </SafeAreaView>
)
}
