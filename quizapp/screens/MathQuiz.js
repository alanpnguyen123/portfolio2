import * as React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../App'

export default class QuizScreen extends React.Component {
  constructor(){
    super();
    var dataSet=[
      {
        question: "What is 2+2?",
        correct: "4"
      },
      {
        question: "Successor of 99 is?",
        answers: [
          "99",
          "100",
          "98",
          "None"
        ],
        correct: 1
      }
    ];
    this.state = {current:0, dataSet: dataSet, correct:0, incorrect:0};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }

    if (this.state.current == this.state.dataSet.length-1) {
      this.setState({current: 0})
      this.setState({incorrect: 0})
      this.setState({correct: 0})
    } else {
      this.setState({current: this.state.current + 1}) 
    }
  }
  render() {
    return(
      <View>
        <Card>
          <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
        </Card>
        <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
      </View>
    )
  }
}

function Question(props) {
  return (
    <Card.Title>
      {props.dataSet.question}
    </Card.Title>
  )
}

function Answer(props) {
  return(
    <View>
    <TouchableOpacity
      style={styles.loginButton}
      onPress={() => {
        props.handleClick(props.choice);
      }}>
      <Text style={{ textAlign: 'center' }}>{props.answer}</Text>
    </TouchableOpacity>
    </View>
  )
}

function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  return(
    <View>
      {answers}
    </View>
  )
}

function QuizArea(props) {
  return(
    <Card style={styles}>
      <Question dataSet={props.dataSet} />
      <Card.Divider/>
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </Card>
  )
}

function TotalCorrect(props) {
  return(
    <View style={styles}><Text>Correct: {props.correct}</Text></View>
  )
}

function TotalIncorrect(props) {
  return(
    <View style={styles}><Text>Incorrect: {props.incorrect}</Text></View>
  )
}

function ScoreArea(props) {
  return(
    <View style={styles} >
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </View>
  )
}