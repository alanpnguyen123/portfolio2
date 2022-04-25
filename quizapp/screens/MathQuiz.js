import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Card, CheckBox } from 'react-native-elements';
import { styles } from '../App'


let questions = [
  {
    title: "Question Title",
    multipleAnswers: true,
    answers: [
      { correct: false, title: "Question 1" },
      { correct: true, title: "Question 2" },
      { correct: true, title: "Question 3" },
      { correct: true, title: "Question 4" },


    ]
  },
  {
    title: "Question Title 2",
    multipleAnswers: true,
    answers: [
      { correct: false, title: "Question A" },
      { correct: true, title: "Question B" },
      { correct: false, title: "Question C" },
      { correct: false, title: "Question D" },


    ]
  }
]
export default function QuizScreen() {
  let [score, setScore] = useState()
  let [answers, setAnswers] = useState([])
  let checkAnswers = useCallback((data, qAnswers) => {
    console.log("Checkin Answers")
    let answersCorrect = true
    console.log(data, qAnswers[i])
    for (let i = 0; i < data.answers.lenth; i++) {
      let qCorrect
      if (data.answers[i].correct) {
        qCorrect = qAnswers.includes(i)
      } else {
        qCorrect = !qAnswers.includes(i)
      }
      answersCorrect = answersCorrect && qCorrect
    }
    if (answersCorrect) {
      console.log("Adding one to Score")
      setScore(prevScore => {
        if (prevScore !== undefined) {
          return prevScore + 1
        } else {
          return 1
        }
      })
    } else {
      console.log("Setting score to 0")
      setScore(prevScore => prevScore === undefined ? 0 : prevScore)
    }
  }, [answers, score])
  return <>
    <View style={styles.container}>
      <Text>Quiz Application</Text>
      <FlatList data={questions} renderItem={({ item, index }) =>
        <Question showAnswers={score !== undefined} data={item} key={index}
          setAnswer={
            (answer) => {
              console.log("Setting the answers for " + index)
              console.log(answers)
              setAnswers(prev => {
                prev[index] = answer
                return [...prev]
              })
            }}
          answers={answers[index]}>
        </Question>
      }> </FlatList>
      <Button title="Submit" onPress={() => questions.forEach((q, i) => checkAnswers(q, answers[i]))} disabled={answers.length == 0}></Button>
      {score !== undefined ? <Text>Score: {score}</Text> : undefined}
      <StatusBar style="auto" />
    </View>
  </>
}

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
