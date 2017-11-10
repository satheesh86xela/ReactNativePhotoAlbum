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
  TouchableHighlight,
  Image
} from 'react-native';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    let {state} = this.props.navigation;
    
    return fetch('https://jsonplaceholder.typicode.com/photos?albumId='+state.params.id)
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

  viewPhotos (photo) {
    const {navigate} = this.props.navigation;
    navigate('ImageView', photo)
  }

  renderPhotoItem(photo) {
    let previewImage = photo.thumbnailUrl;
    return (
      <TouchableHighlight underlayColor="#e0f7ff"  onPress={this.viewPhotos.bind(this, photo)}>
          <View style={styles.photoList}>
            <Image source={{uri: previewImage.replace('http://', 'https://')}} style={styles.photo} />
            <Text style={styles.photoTitle}>{photo.title}</Text>
        </View>
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
          renderRow={this.renderPhotoItem.bind(this)}
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
    justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  photoList: {
    borderBottomWidth:2,
    borderColor:'#fff',
    alignItems:'center',
    flexDirection:'row',
    padding:20,
  },
  photoTitle: {
    fontSize:18,
    paddingLeft:10,
    justifyContent:'space-around'
  },
  photo: {width: 60, height: 60}
});
