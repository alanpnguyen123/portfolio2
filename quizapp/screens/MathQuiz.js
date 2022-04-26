import React, { useCallback, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
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
            setScore("Incorrect!")
            console.log(text)
        }
    },[text,score])

    let [number, setNumber] = useState('');
    let[grade, setGrade] =useState()
    let checkNumber = useCallback(()=>{
        if (number == questions[1].answers){
            setGrade("Correct!")
        }
        else{
            setGrade("Incorrect!")
            console.log(questions[1].answers)
            console.log(number)
        }
    },[number,grade])

  return (
    <View style={styles.container}>
    <Text>Type in the best Answer</Text>
        <Card>
        <Card.Title>{questions[0].title}</Card.Title>
        <View>
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
        <Card.Title>{questions[1].title}</Card.Title>
        <View>
            <TextInput
            placeholder="Type Your Answer Here"
            onChangeNumber={newNumber => setNumber(newNumber)}
            defaultNumber={number}
            />
            <Button title="Submit" onPress={()=>checkNumber()} disabled={text ===""}></Button>
            {grade !==undefined? <Text>{grade}</Text> : undefined}
        </View>
        </Card>
    </View>
  );
}

export default QuizScreen;

