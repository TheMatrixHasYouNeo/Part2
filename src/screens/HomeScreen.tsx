import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the MenuItem type
interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: string;
}

// Define the parameters for the navigation stack
type RootStackParamList = {
  Home: { newItem?: MenuItem }; // Define parameters for Home
  'Add Menu Item': undefined; // Define parameters for Add Menu Item screen
};

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  // Use useEffect to check for newItem in route params
  useEffect(() => {
    const { newItem } = route.params as { newItem?: MenuItem }; // Access newItem safely
    if (newItem) {
      setMenuItems((prevItems) => [...prevItems, newItem]); // Add new item to the list
    }
  }, [route.params]);

  const addMenuItem = () => {
    navigation.navigate('Add Menu Item'); // Correctly navigate without parameters
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Add Menu Item" onPress={addMenuItem} />
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()} // Ensure key is unique
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    marginBottom: 15,
  },
});

export default HomeScreen;
