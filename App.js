import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import {createStackNavigator } from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';
import Home from './SRC/Home'
import Options from './SRC/Options'
import Questions from './SRC/Questions'
import MyList from './SRC/MyList'


 class Cat extends Component {
  render() {
    return (
      <Home/> 
    );
  }
}
const Root = createStackNavigator({
  home: { 
      screen: Home,
  },
  Options: { 
    screen: Options,
},
Questions: { 
  screen: Questions,
},
MyList: { 
  screen: MyList,
},
});

const container = createAppContainer(Root);
export default container;   