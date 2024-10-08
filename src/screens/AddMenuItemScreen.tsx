import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Ensure you have this package installed
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type MenuItem = {
  name: string;
  description: string;
  course: string;
  price: string;
};

type RootStackParamList = {
  Home: { newItem: MenuItem }; // Define the parameters for Home screen
};

const AddMenuItemScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<string>('starter'); // Specify the type here
  const [price, setPrice] = useState('');

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleAddItem = () => {
    const newItem: MenuItem = { name, description, course, price };
    navigation.navigate('Home', { newItem }); // Correctly navigate with parameters
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Menu Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Picker
  selectedValue={course}
  onValueChange={(itemValue) => setCourse(itemValue)}
  style={styles.picker}
>
  <Picker.Item label="Starter" value="starter" />
  <Picker.Item label="Main" value="main" />
  <Picker.Item label="Dessert" value="dessert" />
</Picker>
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={handleAddItem} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default AddMenuItemScreen;
