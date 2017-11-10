/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Me extends Component {
  callLogout() {
    const {navigate} = this.props.navigation;
    navigate("Login", {})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Username: satheev</Text>
        <Button title="Logout" onPress={this.callLogout.bind(this)} />
      </View> 
    );
  }
}

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
  textControl: {
    borderWidth:1,
    borderRadius:5,
    borderColor:'#CCC',
    width:300,
    padding:10,
    marginBottom:10
  },
});
