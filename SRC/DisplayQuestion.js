import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native'
import Constants from 'expo-constants';
import RadioForm, {RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button'

const styles = StyleSheet.create({
   radioText:{
    fontSize:15
    },
});


export default class DisplayQuestions extends React.Component{
  
    constructor(props) {
        super(props) 
        const i = 0;
        const questions1 = require('./Data.json').Questions;
       this.state = {
      j:i,
      latestQuestions : questions1,
      lastRefresh: questions1[i].Question,
      radio_props : questions1[i].Params
       }
          this.refreshScreen = this.refreshScreen.bind(this)
         }

         refreshScreen() {
           if(this.state.j < this.state.latestQuestions.length-1){
           this.state.j = this.state.j+1
           this.setState({ lastRefresh: this.state.latestQuestions[this.state.j].Question ,
           radio_props : this.state.latestQuestions[this.state.j].Params 
        })
      }
         }  

    render(){
        return(
            <View style={{top:20,fontSize:20}}>
                <Text>{this.state.lastRefresh} </Text>
                <View style={styles.component}>
            <RadioForm
              ref="radioForm"
              radio_props={this.state.radio_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              labelColor={'#000'}
              animation={true}
              onPress={this.refreshScreen}
            />
          </View>
            </View>
        );
    }

}

 