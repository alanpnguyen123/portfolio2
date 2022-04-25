import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
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
function Question(){

}
const QuizScreen = () => {
  const [text, setText] = useState('');
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
      <Button title="Submit" onPress={check} disabled={text ===""}></Button>
    </View>
  );
}

export default QuizScreen;

