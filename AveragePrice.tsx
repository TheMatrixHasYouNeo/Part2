import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the type for a menu item
interface MenuItem {
  id: string;
  name: string;
  price: number;
  course: string;
}

// Define the props type for the AveragePrice component
interface AveragePriceProps {
  menuItems: MenuItem[];
}

const AveragePrice: React.FC<AveragePriceProps> = ({ menuItems }) => {
  // Get unique courses
  const courses = [...new Set(menuItems.map((item) => item.course))];
  
  // Calculate average price for each course
  const averages = courses.map((course) => {
    const items = menuItems.filter((item) => item.course === course);
    const average = items.reduce((sum, item) => sum + item.price, 0) / items.length;
    return { course, average };
  });

  return (
    <View style={styles.container}>
      {averages.map(({ course, average }) => (
        <Text key={course}>
          {course}: ${average.toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
});

export default AveragePrice;
