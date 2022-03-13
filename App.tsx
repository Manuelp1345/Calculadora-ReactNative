import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  const {fondo} = styles;
  return (
    <SafeAreaView style={fondo}>
      <StatusBar backgroundColor="black" barStyle={'light-content'} />

      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
