import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Card, CheckBox } from 'react-native-elements';
import { styles } from '../App'

export default function QuizScreen(){

const [state, setState] = useState({
        value:'',
        show:''
    });

const handleChange = (e) => {
    setState({value: e.target.value})
}

const submit = () => {
    setState({show: state.value})
}

return(
        <>
            <form onSubmit={()=>submit()}>
                <input type="text" value={state.value} onChange={(e)=>handleChange(e)} />
                <input type="submit" />
            </form>
            <h2>{state.show}</h2>
        </>
)}