import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import HomeScreen from './screens/HomeScreen'


const Stack = createNativeStackNavigator();
function RepetitionExerciseScreen({ navigation, route }) {
  let { exerciseKey, exerciseList } = route.params
  let [count, setCount] = useState(0)
  let currentExercise = exerciseList.find(ex => ex.key === exerciseKey)
  let suggestion = useCallback(() => {
    navigation.navigate("RepetitionExercise", { exerciseKey: currentExercise.suggestedKey, exerciseList: exerciseList, count: 0 })
  })
  return (
    <View style={styles.container}>
      <Text>{currentExercise.name}: {count}</Text>
      <Button onPress={() => setCount(count => count + 1)} title="Finish Rep"></Button>
      <Button onPress={() => navigation.navigate("Home")} title="Return Home"></Button>
      <Button onPress={() => setCount(0)} title="Reset Reps"></Button>
      <Button onPress={suggestion} title="Suggest New Exercise"></Button>
      <StatusBar style="auto" />
    </View>
  )
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});