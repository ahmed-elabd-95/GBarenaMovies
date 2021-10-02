import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Movies} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
};

export default RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};