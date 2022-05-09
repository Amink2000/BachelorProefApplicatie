import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="steelblue"
          darkColor="rgba(255,255,255,0.8)">
          1
        </Text>


        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open the Thesis screen to view the possible theses.
        

        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="steelblue"
          darkColor="rgba(255,255,255,0.8)">
          2
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          
          Mark the ones you are interested as favourite with a star.
           
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="steelblue"
          darkColor="rgba(255,255,255,0.8)">
          3
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          
           Go to the Favourites screen to submit your top three theses [before 1 April].
           

        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="steelblue"
          darkColor="rgba(255,255,255,0.8)">
          4
        </Text>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          
           Once the selection is made you will get a notification with your selected thesis.

        </Text>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
