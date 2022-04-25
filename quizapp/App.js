import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/MathQuiz';



const Stack = createNativeStackNavigator();


export default function App() {
  let quizList = [
    {
      name: "MathQuiz",
      key: "1",
      suggestedKey: "2"
    },
    {
      name: "Survey",
      key: "2",
      suggestedKey: "1"
    },

  ]
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{quizList:quizList}}/>
        <Stack.Screen name="MathQuiz" component={QuizScreen}initialParams={{quizList:quizList}} />
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
  Button: {
    width: "100%",
    display: "block",
    textAlign: "left",
    float: "left",
    padding: "2em"
  }
});