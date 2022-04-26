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
    {
      title: "What is 4 squared?",
      answers: "16"
    }
  ]
const QuizScreen = () => {
    let [text, setText] = useState('');
    let [score, setScore] = useState()
    let checkAnswers = useCallback (()=>{
        if (text == questions[0].answers){
            setScore("Correct!")       
        }
        else{
            setScore(0)
            console.log(text)
        }
    },[text,score])
    let [text2, setText2] = useState('');
  return (
    <View style={styles.container}>
    <Text>Type in the best Answer</Text>
        <Card>
        <View>
            <Card.title>{questions[1].title}</Card.title>
            <TextInput
            placeholder="Type Your Answer Here"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
            <Button title="Submit" onPress={()=>checkAnswers()} disabled={text ===""}></Button>
            {score !==undefined? <Text>{score}</Text> : undefined}
        </View>
        </Card>
        <Card>
        <View>
            <TextInput
            placeholder="Type Your Answer Here"
            onChangeText2={newText2 => setText2(newText2)}
            defaultValue2={text2}
            />
        </View>
        </Card>
    </View>
  );
}

export default QuizScreen;

