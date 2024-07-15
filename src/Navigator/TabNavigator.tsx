import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EmployeeList from '../Screens/EmployeeList';
import EmployeeDetails from '../Screens/EmployeeDetails';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Search from '../Screens/Search';
export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EmployeeList"
        component={EmployeeList}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="carryout" color={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color={color} size={16} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
