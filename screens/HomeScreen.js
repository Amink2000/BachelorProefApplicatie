import { Text, View, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
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
        <View style={styles.textView}>
        <Text style={styles.text1}>
          Welcome to the thesis platform app! 
        </Text>
        <Text style={styles.text2}>
        Visit the other screens to view the possible thesis subjects and to make your choices.
        </Text>
        <Text style={styles.text2}>
        If you don't know what steps to follow, press on <Icon1 name="information-circle" color="black" size={20}/> in the top right-hand corner.
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
  },
  text1:{
    fontSize:20,
    marginTop: 40,
    marginLeft:17,
    marginRight:17,
    color:"#295D8A"
  },
  text2:{
    fontSize:20,
    marginTop: 15,
    marginLeft:17,
    marginRight:17,
    color:"#295D8A"
  },
  textView:{
    justifyContent:'flex-end'
  }
});
