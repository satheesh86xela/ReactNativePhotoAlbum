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
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      modalVisible: false
    };
  }
  validateLogin() {
    if (this.state.username == 'admin' && this.state.password == 'admin') {
      const {navigate} = this.props.navigation;
      navigate("Home", {});
    } else {
      Alert.alert("Login Information", "Enter Login Credentials")
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput keyboardType="name-phone-pad" style={styles.textControl} onChangeText={(value)=>this.setState({username:value})} placeholder="Username"></TextInput>
        <TextInput onSubmitEditing={this.validateLogin.bind(this)} style={styles.textControl} onChangeText={(value)=>this.setState({password:value})} secureTextEntry={true} placeholder="Password"></TextInput>
        <Button ref="loginBtn" onPress={this.validateLogin.bind(this)} title="Login" />
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
