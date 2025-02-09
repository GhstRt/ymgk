import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Game1 from './Game1'; // Birinci oyun
import Game2 from './Game2'; // İkinci oyun
import Game3 from "./Game3";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Simge desteği

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Firavunlar') {
              iconName = 'gamepad-variant';
            } else if (route.name === 'Sifreleme') {
              iconName = 'puzzle';
            }
            else if (route.name === 'Esleme') {
              iconName = 'arrow-left-right';
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#d1a374',
          tabBarInactiveTintColor: '#6c757d',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Firavunlar" component={Game1} />
        <Tab.Screen name="Sifreleme" component={Game2} />
          <Tab.Screen name="Esleme" component={Game3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
