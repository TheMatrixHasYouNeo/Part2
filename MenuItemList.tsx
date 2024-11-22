import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  course: string; // e.g., "Starter", "Main", "Dessert"
}

interface MenuItemListProps {
  menuItems: MenuItem[];
  onRemoveItem: (id: string) => void;
}

const MenuItemList: React.FC<MenuItemListProps> = ({ menuItems, onRemoveItem }) => {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.itemCourse}>{item.course}</Text>
      </View>
      <Button title="Remove" onPress={() => onRemoveItem(item.id)} color="#ff6347" />
    </View>
  );

  return (
    <View style={styles.container}>
      {menuItems.length > 0 ? (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.emptyText}>No menu items available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#333',
  },
  itemCourse: {
    fontSize: 12,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#aaa',
  },
});

export default MenuItemList;
