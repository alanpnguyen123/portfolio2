import React, { useCallback, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { styles } from '../App'

let survey = [
    {
      title: "On a Scale 1-10 how was the Quiz?",
    },
  ]
const SurveyScreen = () => {
    let [text, setText] = useState('');
    let [score, setScore] = useState()
    let checkAnswers = useCallback (()=>{
        if (text == 1-10){
            setScore("Thank you for the feedback!")  
            console.log(text)     
        }
        else{
            setScore("Please enter a number 1 through 10")
            console.log(text)
        }
    },[text,score])
    
  return (
    <View style={styles.container}>
    <Text>Type in the best Answer</Text>
        <Card>
        <Card.Title>{survey[0].title}</Card.Title>
        <View>
            <TextInput
            placeholder="Type Your Answer Here"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
            <Button title="Submit" onPress={()=>checkAnswers()} disabled={text ===""}></Button>
            
        </View>
        </Card>
    </View>
  );
}

export default SurveyScreen;
