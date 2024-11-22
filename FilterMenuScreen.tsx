import React, { useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from '../App'; // Adjust the import path as needed

// Define props for FilterMenuScreen
type FilterMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Filter'>;
type FilterMenuScreenRouteProp = RouteProp<RootStackParamList, 'Filter'>;

interface Props {
  route: FilterMenuScreenRouteProp;
  navigation: FilterMenuScreenNavigationProp;
}

const FilterMenuScreen: React.FC<Props> = ({ route }) => {
  const { menuItems } = route.params;
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);

  const filterByCourse = (course: string) => {
    setFilteredItems(menuItems.filter((item) => item.course === course));
  };

  return (
    <View style={styles.container}>
      <Button title="Starters" onPress={() => filterByCourse('Starter')} />
      <Button title="Mains" onPress={() => filterByCourse('Main')} />
      <Button title="Desserts" onPress={() => filterByCourse('Dessert')} />
      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: MenuItem }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default FilterMenuScreen;
