import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import HomeScreen from './screens/HomeScreen'


const Stack = createNativeStackNavigator();


export default function App() {
  let exerciseList = [
    {
      name: "Push Ups",
      key: "1",
      suggestedKey: "2"
    },
    {
      name: "Pull Ups",
      key: "2",
      suggestedKey: "1"
    },

  ]
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{exerciseList:exerciseList}}/>
        <Stack.Screen name="RepetitionExercise" component={RepetitionExerciseScreen}initialParams={{exerciseList:exerciseList}} />
      </Stack.Navigator>
    </NavigationContainer>);
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});