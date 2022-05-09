import { StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
      source={require('../assets/images/background.png')}
      style={styles.background}>
        <Image source={require('../assets/images/logo.png')}
        style={styles.logo}>
        </Image>
        <View style={styles.titles}>
        <Text style={styles.title}>
        Thesis Platform
        </Text>
        <Text style={styles.subtitle}>
        KU Leuven
        </Text>
        </View>
        
      </ImageBackground>
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  titles:{
    marginTop: '27%',
    width: '100%',
    alignItems:'center'
  },
  title:{
    fontSize:32,
    fontWeight:'bold',
    color: "steelblue",
  },
  subtitle:{
    fontSize:18,
    color: '#696969',
  },
  logo:{
    position: 'absolute',
    resizeMode: "center",
    right: 70
  },
  background:{
    flex:1,
    resizeMode: 'cover'
  }
});
