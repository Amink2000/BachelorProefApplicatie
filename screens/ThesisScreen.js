import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import axios from 'axios';

const baseUrl = 'https://reqres.in';
export default function ThesisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thesis</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </View>
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