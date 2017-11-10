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
  ListView,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  viewPhotos (album) {
    const {navigate} = this.props.navigation;
    navigate('Photos', album)
  }

  renderAlbumItem(album) {
    return (
      <TouchableHighlight underlayColor="#e0f7ff" onPress={this.viewPhotos.bind(this, album)}>
        <View style={styles.albumList}><Text style={styles.albumTitle}>{album.title}</Text></View>
      </TouchableHighlight>
    );
  }
  
  render() {
    if (this.state.isLoading) {
      return (
          <View style={styles.containerLoader}>
            <ActivityIndicator />
          </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderAlbumItem.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  albumList: {
    borderBottomWidth:2,
    borderColor:'#fff',
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20,
    flexDirection:'row',
    flex:1
  },
  albumTitle: {
    fontSize:18
  }
});
