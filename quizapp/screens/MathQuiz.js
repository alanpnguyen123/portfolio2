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

function Question({ data, answers, setAnswers, showAnswers }) {
    let selectAnswer = useCallback((index) => {
      console.log("onPress()", index, answers);
      if (answers === undefined) {
        answers = []
      }
      if (!answers.includes(index)) {
        answers.push(index);
        setAnswers([...answers])
        console.log(`new answers for ${data.title} `, ...answers)
      } else {
        answers = answers.filter(i => i !== index)
        setAnswers([...answers])
        console.log("new answers: ", ...answers)
      }
    }, [answers])
    return (
      <>
        <Card>
          <Card.Title>{data.title}</Card.Title>
          <View>
            {data.answers.map(
              (answer, index) =>
                <CheckBox key={index} textStyle={showAnswers && !answer.correct ? styles.incorrect : undefined} checked={answers ? answers.includes(index) : false}
                  onIconPress={() => selectAnswer(index)}
                  onPress={() => selectAnswer(index)}
                  title={answer.title}>
                </CheckBox>
            )}
          </View>
        </Card>
      </>
    );
  }
  