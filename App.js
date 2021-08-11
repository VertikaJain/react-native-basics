import React, { useState } from 'react';
import Home from './screens/home'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => { return Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <Home />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />);
  }
}
