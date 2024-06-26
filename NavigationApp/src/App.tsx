import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
// import {BottomTabNavigator} from './presentation/routes/BottonTabsNavigator';
// import {StackNavigator} from './presentation/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};
