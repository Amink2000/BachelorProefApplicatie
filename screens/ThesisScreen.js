import { StyleSheet, Button, SafeAreaView} from 'react-native';

import { Text, View } from '../components/Themed';
import { IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor } from 'react-native-axios-jwt'
import axios from 'axios'
import { useCallback } from 'react';

const apiUrl = 'http://localhost:8080';
const accesToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNSIsInJvbGUiOiJTdHVkZW50IiwiZXhwIjoxNjUyMTI1OTc2LCJpYXQiOjE2NTIxMDc5NzZ9.uZ-hX-ob9xA5n2Alwg-beb2aW9UNAislHxPeFSksPWm6YZVmgOBz5kDI-W9-cgsE9Sr5aZ9n7BQTcc5tCZOWew'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization : `Bearer ${accesToken}`
  }
})



export default function ThesisScreen() {
  const fetchData = useCallback(async () => {
    try {
      const result = await authAxios.get(`/thesis/all`);
      setThesis(result.data);
    } catch (err){
      setRequestError(err.message);
    }
  })
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Thesis</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button 
      onPress={() => fetchData()}
      title="thesis list">
      
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: 'steelblue',
    borderBottomWidth: 1
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});