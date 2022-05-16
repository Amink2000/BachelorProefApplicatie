import { Text, View ,ScrollView, StyleSheet, Button, TextInput, Alert} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import authAxios from '../apis/AuthApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function FavouriteScreen() {
  let STORAGE_KEY0 = "user_disable1";
  let STORAGE_KEY1 = "user_firstChoice1";
  let STORAGE_KEY2 = "user_secondChoice1";
  let STORAGE_KEY3 = "user_thirdChoice1";
 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data0, setData0] = useState([]);
  const [idStudent, setIdStudent] = useState(15);
  const [firstChoice, setFirstChoice] = useState('');
  //const { getItem1, setItem1 } = useAsyncStorage('@storage_key1');
  const [secondChoice, setSecondChoice] = useState('');
  //const { getItem2, setItem2 } = useAsyncStorage('@storage_key2');
  const [thirdChoice, setThirdChoice] = useState('');
  //const { getItem3, setItem3 } = useAsyncStorage('@storage_key3');
  const [showBox, setShowBox] = useState(true);
  const [disable, setDisable] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const readItemFromStorage = async () => {
    try {
      const value0 = await AsyncStorage.getItem(STORAGE_KEY0);
      const value1 = await AsyncStorage.getItem(STORAGE_KEY1);
      const value2 = await AsyncStorage.getItem(STORAGE_KEY2);
      const value3 = await AsyncStorage.getItem(STORAGE_KEY3);
      if (value1 !== null) {
        setDisable(JSON.parse(value0));
        setFirstChoice(JSON.parse(value1));
        setSecondChoice(JSON.parse(value2));
        setThirdChoice(JSON.parse(value3));
        //console.log(JSON.parse(value0))
      }
    } catch (e) {
      console.log('Failed to fetch the input from storage');
    }
  };

  const writeItemToStorage = async (firstChoice, secondChoice, thirdChoice, disable) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY0, JSON.stringify(disable))
      await AsyncStorage.setItem(STORAGE_KEY1, JSON.stringify(firstChoice))
      await AsyncStorage.setItem(STORAGE_KEY2, JSON.stringify(secondChoice))
      await AsyncStorage.setItem(STORAGE_KEY3, JSON.stringify(thirdChoice))
      console.log(disable);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readItemFromStorage();
    authAxios.get("/thesis/all")
    .then(({ data }) => {
        //console.log("defaultApp -> data", data)
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


const onSubmitFormHandler = async () => {
  if (!firstChoice || !secondChoice || !thirdChoice) {
    alert("Please complete your selection.");
    return;
  }
  if (firstChoice==secondChoice || secondChoice==thirdChoice || thirdChoice==firstChoice){
    alert("Please select three different subjects, selecting the same subject more than once is not allowed.");
    return;
  }
  return Alert.alert(
    "Alert",
    "Are you sure you want to submit your choices?",
    [
      // The "Yes" button
      {
        text: "Yes",
        onPress: () => {
          
          writeItemToStorage(firstChoice,secondChoice,thirdChoice, true);
          
          setShowBox(false);
          
          const preferencesData = {
            "idStudent": 15,
            "firstChoice": firstChoice,
            "secondChoice": secondChoice,
            "thirdChoice": thirdChoice,
            "submitted": true
          }
          try {
            authAxios.post("/preferences/add", preferencesData).then(response=>{
              console.log(response)
              //console.log(preferencesData)
            })
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
      },
    ]
  );
  
  setLoading(true);
  
  
};
const onSaveFormHandler = async () => {
  if (!firstChoice || !secondChoice || !thirdChoice) {
    alert("Please complete your selection.");
    return;
  }
  if (firstChoice==secondChoice || secondChoice==thirdChoice || thirdChoice==firstChoice){
    alert("Please select three different subjects, selecting the same subject more than once is not allowed.");
    return;
  }
  writeItemToStorage(firstChoice,secondChoice,thirdChoice, false);
  setLoading(true);
  const preferencesData = {
    "idStudent": 15,
    "firstChoice": firstChoice,
    "secondChoice": secondChoice,
    "thirdChoice": thirdChoice,
    "submitted": false
  }
  try {
    authAxios.post("/preferences/add", preferencesData).then(response=>{
      console.log(response)
      //console.log(preferencesData)
    })
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
  alert("Your selection has been saved, if you are sure of this selection you can submit it.")
  setLoading(false);
  
  
};

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
      itemStyle={{height:130}}
  >
      <Picker.Item label="Please select your first option..." value="" />
			{renderSubjectList()}

		</Picker>
    <Text style={{width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0}}>{' '}</Text>
      <Text style={styles.subtitle}> 
        Choice number 2:
      </Text>
      <Picker 
      itemStyle={{height:130}}
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
      itemStyle={{height:130}}
      selectedValue={thirdChoice}
      onValueChange={(itemValue, itemIndex) =>
      setThirdChoice(itemValue)}
  >
      <Picker.Item label="Please select your third option..." value="" />
			{renderSubjectList()}

		</Picker>
    
        <View>
        <Button
            title="Save" 
            style={styles.saveButton}
            onPress={
              () => { onSaveFormHandler(); }
             }
            disabled={disable}
          />
          <Button 
            title="Submit"
            onPress={
              () => { onSubmitFormHandler(); setDisable(true);}
             }
            style={styles.submitButton}
            disabled={disable}
            
          />
        </View>
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
    marginHorizontal: 5
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
  saveButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  submitButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  fixToText: {
    marginTop:5,
    marginHorizontal:10,
   
  },
});