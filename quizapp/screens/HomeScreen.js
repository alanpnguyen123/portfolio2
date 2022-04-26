import {  View, Button, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { useCallback } from 'react';
import { styles } from '../App'
import { Card } from 'react-native-elements';
import * as React from 'react';


export default class Dashboard extends React.Component {
    constructor(){
      super();
      this.state={
      }
    }
  render() {
    return (
    
      <KeyboardAvoidingView style={styles.containerBox}>
        <View>
          <Text style={styles.textCenter}>Select Option Below</Text>
        </View>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('MathQuiz');
        }}>
        <Card>
          <Card.Title>Math Quiz</Card.Title>
          <Card.Divider/>
           <View style={styles.user}>
          </View>
        </Card>
       </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Survey');
        }}>
          <Card>
            <Card.Title>Survey</Card.Title>
            <Card.Divider/>
            <View style={styles.user}>
            </View>
          </Card>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}