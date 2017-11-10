/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ImageView extends Component {
  
  render() {
    let {state} = this.props.navigation;  
    return (
      <View style={styles.container}>
        <Text style={styles.photoTitle}>{state.params.title}</Text>
        <Image source={{uri:state.params.url.replace('http://', 'https://')}} style={styles.photo} />
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
    padding:20
  },
  photo: {
    width: 300,
    height:300
  },
  photoTitle: {
    fontSize:25,
    marginBottom:25
  }
});
