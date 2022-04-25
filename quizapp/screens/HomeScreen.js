import { StatusBar } from 'expo-status-bar';
import {  View, Button, FlatList } from 'react-native';
import { useCallback } from 'react';


export default function HomeScreen({ navigation,  route }) {
    let exerciseList = route.params.exerciseList
    let gotoExercise = useCallback(({ key }) => {
      navigation.navigate("RepetitionExercise", { exerciseKey: key, count: 0, exerciseList: exerciseList })
    })
    return (
      <View style={styles.container}>
        <FlatList data={exerciseList} renderItem={({ item }) =>
          <Button onPress={() => gotoExercise(item)} title={item.name}></Button>
        } />
        <StatusBar style="auto" />
      </View>
    )
  }