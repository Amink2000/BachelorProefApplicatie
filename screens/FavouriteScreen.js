import { Text, ScrollView, StyleSheet, Button, TextInput} from 'react-native';

import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import {useForm, Controller} from "react-hook-form"
const options = ["A.I. bij KBC", "ML model bij Pepsico", "Network Security bij DistriNet"];

export default function FavouriteScreen() {
  const [selected1, setSelectedValue1] = useState();
  const [selected2, setSelectedValue2] = useState();
  const [selected3, setSelectedValue3] = useState();
  return (
    <ScrollView>
      <Text style={styles.title}>
        Select three theses in your top three order
      </Text>
      <ScrollView style={styles.separator} lightColor="steelblue" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}> 
        Choice number 1:
      </Text>
      <Picker
          //style={{ height: "30%", width: "100%" }}
          //itemStyle={{ backgroundColor:"steelblue", color: "blue", fontSize:17 }}
          selectedValue={selected1}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedValue1(itemValue)
        }>
          <Picker.Item label='Please select your first option...' value='0' />
          <Picker.Item label="A.I. bij KBC" value="KBC" />
          <Picker.Item label="Network Security bij DistriNet" value="Pepsico" />
      </Picker>
      <Text style={styles.subtitle}> 
        Choice number 2:
      </Text>
      <Picker
          selectedValue={selected2}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedValue2(itemValue)
        }>
          <Picker.Item label='Please select your second option...' value='0' />
          <Picker.Item label="A.I. bij KBC" value="KBC" />
          <Picker.Item label="Network Security bij DistriNet" value="Pepsico" />
      </Picker>
      <Text style={styles.subtitle}> 
        Choice number 3:
      </Text>
      <Picker
          selectedValue={selected3}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedValue3(itemValue)
        }>
          <Picker.Item label='Please select your third option...' value='0' />
          <Picker.Item label="A.I. bij KBC" value="KBC" />
          <Picker.Item label="Network Security bij DistriNet" value="Pepsico" />
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
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
});