import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}>
        <NavigationContainer>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          <Routes />
        </NavigationContainer>
      </TouchableWithoutFeedback>
    </SafeAreaProvider >
  );
};

export default App;

