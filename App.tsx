// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';

// Define RootStackParamList
export type RootStackParamList = {
  Home: undefined;
  AddMenu: { menuItems: MenuItem[]; setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> };
  Filter: { menuItems: MenuItem[] };
};

export type MenuItem = {
  name: string;
  price: number;
  course: string;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Menu Overview' }} 
        />
        <Stack.Screen 
          name="AddMenu" 
          component={AddMenuScreen} 
          options={{ title: 'Add Menu Items' }} 
        />
        <Stack.Screen 
          name="Filter" 
          component={FilterMenuScreen} 
          options={{ title: 'Filter Menu' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
