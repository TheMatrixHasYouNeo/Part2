import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Make sure the path is correct
import AddMenuItemScreen from './src/screens/AddMenuItemScreen'; // Make sure the path is correct

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Menu Item" component={AddMenuItemScreen} /> {/* Make sure this matches in navigation */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
