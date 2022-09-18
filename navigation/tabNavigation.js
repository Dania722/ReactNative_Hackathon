import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Views from '../Screens/mainScreens/view';

function TabNavigation() {
  return (
    <>
  

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="mainscreen" component={Views} />   
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default TabNavigation;
