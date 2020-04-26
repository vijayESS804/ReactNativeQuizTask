import React from 'react';
import {View,Text} from 'react-native'
import DisplayQuestions from './DisplayQuestion';

export default class Questions extends React.Component {    
    render(){
        return(
            <View style = {{margin :30}}> 
            <View style = {{flex:1 ,alignItems:'flex-start',justifyContent:"flex-start"}} >
            <Text>Your time:</Text>
            </View>
            <View style = {{alignItems:'flex-end',justifyContent:'flex-end'}} >
            <Text>12.00</Text>
            </View>
            <View >
            <DisplayQuestions/>
            </View>
            </View>
        );
    }

}