import React from 'react';
import {View,Text,Button} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

export default class Home extends React.Component{
    static navigationOptions = {
        headerShown:false
      };
    render(){
        return(
            <View style={{ top : 250, alignItems : 'center'}}>
            <Text>Quiz App!</Text>
            <View style={{top : 50,width:200}}>
            <Button  title = 'Go' onPress={() => this.props.navigation.navigate('Options')}/>
            </View>
            </View>
        );
    }
}


  


  
  