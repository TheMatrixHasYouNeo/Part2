import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from '../App'; // Adjust the import path as needed

// Define props for AddMenuScreen
type AddMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddMenu'>;
type AddMenuScreenRouteProp = RouteProp<RootStackParamList, 'AddMenu'>;

interface Props {
  route: AddMenuScreenRouteProp;
  navigation: AddMenuScreenNavigationProp;
}

const AddMenuScreen: React.FC<Props> = ({ route, navigation }) => {
  const { menuItems, setMenuItems } = route.params;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  const addItem = () => {
    setMenuItems([...menuItems, { name, price: parseFloat(price), course }]);
    setName('');
    setPrice('');
    setCourse('');
  };

  const removeItem = (index: number) => {
    const updatedMenu = [...menuItems];
    updatedMenu.splice(index, 1);
    setMenuItems(updatedMenu);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Course" value={course} onChangeText={setCourse} style={styles.input} />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeItem(index)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
});

export default AddMenuScreen;
