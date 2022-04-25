import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
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
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
         <Text>Quiz Application</Text>
      <FlatList data={questions} renderItem={({ item, index }) =>
        <Question data={item} key={index}
          setAnswer={
            (answer) => {
              setAnswers(prev => {
                prev[index] = answer
                return [...prev]
              })
            }}
          answers={answers[index]}>
        </Question>
      }> </FlatList>
      <TextInput
        placeholder="Type Your Answer Here"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

export default QuizScreen;