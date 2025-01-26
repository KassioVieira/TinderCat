import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Cats from '../screens/Cats/Cats';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabStack = () => {

    const getTabIcon = (route: any, color: string, size: number) => {
        let iconName: any;
        if (route.name === 'Cats') {
          iconName = 'pets';
        } else if (route.name === 'Chat') {
          iconName = 'chat';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }
        return (
          <MaterialIcons name={iconName} size={size} color={color} />
        );
    }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabStyle,
        tabBarActiveTintColor: '#EC537E',
        tabBarInactiveTintColor: 'black',
        tabBarIcon: ({ color, size }) => getTabIcon(route, color, size),
      })}

    >
      <Tab.Screen
        name="Cats"
        component={Cats}
        options={{headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
 tabStyle: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 40,
    width: '40%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
 },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
    color: 'black',
  },
});

export default TabStack;
