import { StatusBar } from 'expo-status-bar';
import {  Text, View, Button } from 'react-native';
import { useCallback, useState } from 'react';
import { styles } from '../App'

export default function QuizScreen({ navigation, route }) {
  let { quizKey, quizList } = route.params
  let [count, setCount] = useState(0)
  let currentExercise = quizList.find(ex => ex.key === quizKey)
  let suggestion = useCallback(() => {
    navigation.navigate("RepetitionExercise", { quizKey: currentExercise.suggestedKey, count: 0 })
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