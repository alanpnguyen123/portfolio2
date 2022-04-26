import { useAssets } from 'expo-asset';
import { title } from 'process';
import React, { useCallback, useState } from 'react';
import { FlatList, Text, TextInput, useColorScheme, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { styles } from '../App'

let questions = [
    {
      title: "What is 2+2?",
      answers: "4"
    },
  ]
const QuizScreen = () => {
    let [text, setText] = useState('');
    let correctAnswer = questions.answers
    let [score, setScore] = useState()
    let checkAnswers = useCallback (()=>{
        if (text == correctAnswer){
            setScore(1)
        }
        else{
            setScore(0)
            console.log(text)
        }
    },[text,score])
  return (
    <View style={styles.container}>
    <Text>Type in the best Answer</Text>
        <Card>
        <View>
            <TextInput
            placeholder="Type Your Answer Here"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
        </View>
        </Card>
      <Button title="Submit" onPress={()=>checkAnswers()} disabled={text ===""}></Button>
      {score !==undefined? <Text>Score: {score}</Text> : undefined}
    </View>
  );
}

export default QuizScreen;

