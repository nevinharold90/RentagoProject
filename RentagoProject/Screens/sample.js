import React from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const Orders = [
    {
        name: "oloy",
        address: "Bonbon"
    },
    {
        drinks: "Coke",
        burger: "Meat Burger"
    },
    {
        drinks: "Sprite",
        burger: "Meat Burger"
    },
    {
        drinks: "Lemon",
        burger: "Meat Burger"
    }
  ];

  return (
    <View>
      {Orders.map((order, index) => (
        <View>
            <Text>
                Type of Drinks:
            </Text>
            <Text key={index}>
                {order.drinks}
            </Text>
        </View>
    ))}
    </View>
  );
};

export default MyComponent;
