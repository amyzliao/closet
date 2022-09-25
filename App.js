import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import all my screens
import HomeScreen from './screens/home';
import LogOutfitScreen from './screens/logFit';
import ClosetScreen from './screens/closet';
import StatScreen from './screens/stats';
import WearHistScreen from './screens/wearHist';
import ProfileScreen from './screens/profile';


//Home Screen and Log Outfit Screen are in a stack
const HomeStack = createNativeStackNavigator();
function HomeStackScreen () {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Log Outfit" component={LogOutfitScreen} />
    </HomeStack.Navigator>
  );
}

//Stat Screen and Wear History Screen are in a stack
const StatStack = createNativeStackNavigator();
function StatStackScreen () {
  return (
    <StatStack.Navigator initialRouteName="Stats">
      <StatStack.Screen name="Stats" component={StatScreen} />
      <StatStack.Screen name="Wear History" component={WearHistScreen} />
    </StatStack.Navigator>
  )
}


//Home, Closet, Stat, and Profile use bottom tab navigation
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStackScreen} 
          options={{ 
            headerShown: false, 
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Closet"
          component={ClosetScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-shirt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="StatStack" 
          component={StatStackScreen} 
          options={{ 
            headerShown: false, 
            title: 'Stats',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-stats-chart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

