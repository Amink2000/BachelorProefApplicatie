import { Text, ScrollView, StyleSheet, Button, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import authAxios from '../apis/AuthApi';

export default function FavouriteScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [idStudent, setIdStudent] = useState();
  const [firstChoice, setFirstChoice] = useState();
  const [secondChoice, setSecondChoice] = useState();
  const [thirdChoice, setThirdChoice] = useState();
  const [submitted, setSubmitted] = useState();

  useEffect(() => {
    authAxios.get("/thesis/all")
    .then(({ data }) => {
        console.log("defaultApp -> data", data)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
}, []);
const renderSubjectList = () => {
  return data.map((thesis) => {
    return <Picker.Item label={thesis.name} value={thesis.id} key={thesis.id} />
  })
}
  return (
    <ScrollView>
      <Text style={styles.title}>
        Select three subjects in your top three order
      </Text>
      <ScrollView style={styles.separator} lightColor="steelblue" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}> 
        Choice number 1:
      </Text>
      <Picker 
      selectedValue={firstChoice}
      onValueChange={(itemValue, itemIndex) =>
      setFirstChoice(itemValue)}
  >
      <Picker.Item label="Please select your first option..." value="" />
			{renderSubjectList()}

		</Picker>
    <Text style={{width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0}}>{' '}</Text>
      <Text style={styles.subtitle}> 
        Choice number 2:
      </Text>
      <Picker 
      selectedValue={secondChoice}
      onValueChange={(itemValue, itemIndex) =>
      setSecondChoice(itemValue)}
  >
      <Picker.Item label="Please select your second option..." value="" />
			{renderSubjectList()}

		</Picker>
      <Text style={styles.subtitle}> 
        Choice number 3:
      </Text>
      <Picker 
      selectedValue={thirdChoice}
      onValueChange={(itemValue, itemIndex) =>
      setThirdChoice(itemValue)}
  >
      <Picker.Item label="Please select your third option..." value="" />
			{renderSubjectList()}

		</Picker>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop:20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'steelblue',
    borderBottomColor: 'steelblue',
    borderBottomWidth: 1,
  },
  subtitle:{
    fontSize:15,
    marginTop:2,
    marginLeft: 20,
    color:"black"
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
});