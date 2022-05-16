import React from "react";
import { StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";

export default function SimpleAnimation() {
  return (
    <View>
      <LottieView
        source={require("../components/lotties/submitgif.json")}
        autoPlay
        loop={false}
        style={styles.animation}
        autoSize={true}
        resizeMode='cover' 
      />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    height:110,
  },
});