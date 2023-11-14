import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Splash from './src/Screens/AuthScreens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {persistor, store} from './src/Redux/Store';

const App = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Splash />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
