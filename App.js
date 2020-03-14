import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CatechismNavigator from './navigation/CatechismNavigation';
import * as Font from 'expo-font';
import {AppLoading} from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    'lato': require('./assets/Lato/Lato-Regular.ttf'),
    'lato-bold': require('./assets/Lato/Lato-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if(!fontLoaded){
    return (
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
        />
    )
  }
  return (
    <CatechismNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
