import { StatusBar } from 'expo-status-bar';
import {  Text, View, Button } from 'react-native';
import { useCallback, useState } from 'react';
import { styles } from '../App'

export default function QuizScreen({ navigation, route }) {
  let { quizKey, exerciseList } = route.params
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