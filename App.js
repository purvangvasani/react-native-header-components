/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator, DrawerItems, createAppContainer} from 'react-navigation'
import {SafeAreaView, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Entypo';
import stack from './src/screens/Home/HomeScreen';

class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex : 1}}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home:  stack,
}, 
{
  contentComponent : CustomDrawerComponent,
  drawerWidth:300,
  contentOptions:{
    activeTintColor:'#3C53B4'
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default createAppContainer(AppDrawerNavigator)