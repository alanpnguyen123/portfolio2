import { StatusBar } from 'expo-status-bar';
import {  View, Button, FlatList, KeyboardAvoidingView } from 'react-native';
import { useCallback } from 'react';
import { styles } from '../App'


export default function render() {
    return (
    
      <KeyboardAvoidingView style={styles.containerBox}>
        <View>
          <Text style={styles.textCenter}>Select Quiz</Text>
        </View>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('NaturalQuiz');
        }}>
        <Card>
          <Card.Title>Natural number</Card.Title>
          <Card.Divider/>
           <View style={styles.user}>
          </View>
        </Card>
       </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('WholeQuiz');
        }}>
          <Card>
            <Card.Title>Whole Number</Card.Title>
            <Card.Divider/>
            <View style={styles.user}>
            </View>
          </Card>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

