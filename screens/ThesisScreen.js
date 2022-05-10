import { StyleSheet, Button, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';

import { Text, View } from '../components/Themed';
import { IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor } from 'react-native-axios-jwt'
import axios from 'axios'
import {useState, useEffect } from 'react';
import authAxios from '../apis/AuthApi';
import ThesisApi from '../apis/ThesisApi';
import ThesisCard from '../components/ThesisCard';
import { get } from 'react-hook-form';

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
  <SafeAreaView style={styles.container}>
            <FlatList data={data}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <ThesisCard item = {item}/>
                }}
            />
        </SafeAreaView>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
  },
  title: {
    fontSize: 32,
  },
});