import { StatusBar } from 'expo-status-bar';
import {  View, Button, FlatList } from 'react-native';
import { useCallback } from 'react';
import { styles } from '../App'


export default function HomeScreen({ navigation,  route }) {
    let quizList = route.params.quizList
    let gotoQuiz = useCallback(({ key }) => {
      navigation.navigate("MathQuiz", { quizKey: key, count: 0, quizList: quizList })
    })
    return (
      <View style={styles.container}>
        <FlatList data={quizList} renderItem={({ item }) =>
          <Button onPress={() => gotoQuiz(item)} title={item.name}></Button>
        } />
        <StatusBar style="auto" />
      </View>
    )
  }