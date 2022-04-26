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
        if (text == questions){
            setScore(1)
            console.log(setText)
        }
        else{
            setScore(0)
            console.log(text)
        }
    },[questions])
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

