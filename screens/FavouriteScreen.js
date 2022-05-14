import { Text, View ,ScrollView, StyleSheet, Button, TextInput, Alert} from 'react-native';
import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import authAxios from '../apis/AuthApi';

export default function FavouriteScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [idStudent, setIdStudent] = useState(15);
  const [firstChoice, setFirstChoice] = useState();
  const [secondChoice, setSecondChoice] = useState();
  const [thirdChoice, setThirdChoice] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [showBox, setShowBox] = useState(true);

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
const preferencesData = {
  "idStudent": 15,
  "firstChoice": firstChoice,
  "secondChoice": secondChoice,
  "thirdChoice": thirdChoice,
  "submitted": submitted
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
          setSubmitted(true);
          setShowBox(false);
          
          try {
            authAxios.post("/preferences/add", preferencesData).then(response=>{
              console.log(response)
              console.log(preferencesData)
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
  setLoading(true);
  
  try {
    authAxios.post("/preferences/add", preferencesData).then(response=>{
      console.log(response)
      console.log(preferencesData)
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
    
        <View style={styles.fixToText}>
        <Button
            title="Save"
            onPress={onSaveFormHandler}
            style={styles.saveButton}
          
          />
          <Button
            title="Submit"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            
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

  },
  submitButton:{

  },
  fixToText: {
    marginTop:5,
    marginHorizontal:10,
   
  },
});