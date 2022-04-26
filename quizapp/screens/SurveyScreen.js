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
            <Button title="Submit" onPress={()=><Text>Your Feedback has been accepted</Text>} disabled={text ===""}></Button>
            
        </View>
        </Card>
    </View>
  );
}

export default SurveyScreen;
