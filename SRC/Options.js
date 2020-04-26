import React from 'react';
import {View,Button,Text} from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

class Options extends React.Component{
    //for hiding navigation in current opage
    static navigationOptions = {
        headerShown:false,
        HeaderTitle:'Home'
      };
    render(){
        return(
            <View style={{ top :200, alignItems : 'center'}}>
                <View style = {{ top:50,width:200,alignItems:'center'}}>
                 <Button title='Play' onPress= {()=> this.props.navigation.navigate('Questions')} />
                 </View>
                 <View style = {{ top:80,width:200,alignItems:'center'}}>
            <Button title='MyHome' onPress= {()=> this.props.navigation.navigate('MyList')} />
            </View>
                </View>
        );
    }

}
export default Options