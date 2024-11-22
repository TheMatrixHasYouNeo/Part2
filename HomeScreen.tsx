import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AveragePrice from '../components/AveragePrice';
import MenuItemList from '../components/MenuItemList';

// Define the type for the navigation prop
type HomeScreenNavigationProp = StackNavigationProp<any, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // Define menu items with id
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Soup', price: 50, course: 'Starter' },
    { id: '2', name: 'Steak', price: 150, course: 'Main' },
    { id: '3', name: 'Ice Cream', price: 80, course: 'Dessert' },
  ]);

  // Function to remove a menu item
  const onRemoveItem = (id: string) => {
    setMenuItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Display average price */}
      <AveragePrice menuItems={menuItems} />
      {/* Display list of menu items with remove functionality */}
      <MenuItemList menuItems={menuItems} onRemoveItem={onRemoveItem} />
      {/* Button to navigate to Add Menu screen */}
      <Button 
        title="Add Menu Items" 
        onPress={() => navigation.navigate('AddMenu', { menuItems, setMenuItems })} 
      />
      {/* Button to navigate to Filter Menu screen */}
      <Button 
        title="Filter Menu" 
        onPress={() => navigation.navigate('Filter', { menuItems })} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
});

export default HomeScreen;
