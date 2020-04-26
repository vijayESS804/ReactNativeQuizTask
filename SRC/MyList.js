import React from 'react';
import {View, SafeAreaView,Text,FlatList,StyleSheet,Image} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
      id: '1',
      title: 'Level1',
    },
    {
      id: '2',
      title: 'Level2',
    },
    {
      id: '3',
      title: 'Level3',
    },
    {
        id: '4',
        title: 'Level4',
    },
  ];
  
  function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  

export default class MyList extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
              <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    item: {
      backgroundColor: 'lightgrey',
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
  });
  