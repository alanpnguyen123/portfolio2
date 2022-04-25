import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { styles } from '../App'

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
          <Text style={styles.textCenter}>Select Quiz</Text>
        </View>
        <Button onPress={() => {
          this.props.navigation.navigate('MathQuiz');
        }}>
        <Card>
          <Card.Title>Natural number</Card.Title>
          <Card.Divider/>
           <View Button={styles.user}>
            <Image
              style={styles.box}
              resizeMode="cover"
            />
          </View>
        </Card>
        </Button>
      

        <Button onPress={() => {
          this.props.navigation.navigate('Survey');
        }}>
          <Card>
            <Card.Title>Whole Number</Card.Title>
            <Card.Divider/>
            <View style={styles.user}>
              <Image
                style={styles.box}
                resizeMode="cover"
              />
            </View>
          </Card>
        </Button>
      </KeyboardAvoidingView>
    );
  }
}