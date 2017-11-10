/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './Components/Login';
import AlbumScreen from './Components/Album';
import MeScreen from './Components/Me';
import PhotosScreen from './Components/Photos';
import ImageViewScreen from './Components/ImageView';

const AlbumNavigation = StackNavigator({
  Album: {
    screen: AlbumScreen,
    navigationOptions: {
      title: 'Album',
      headerStyle: {
        backgroundColor:'#025268'
      },
      headerTitleStyle: {
        color:'#FFF'
      }
    }
  },
  Photos: {
    screen: PhotosScreen,
    navigationOptions: {
      title: 'Photos',
      headerStyle: {
        backgroundColor:'#025268'
      },
      headerTitleStyle: {
        color:'#FFF'
      },
      headerBackTitleStyle: {
        color:'#FFF'
      },
      headerTintColor: '#FFF'
    }
  }
});

const AlbumMainNavigation = StackNavigator({
  Album: {
    screen: AlbumNavigation
  },
  ImageView: {
    screen: ImageViewScreen
  }
},
{
    mode:'modal',
    headerMode:'none'
});

const TabNavigation = TabNavigator({
  Album: {
    screen: AlbumMainNavigation,
    navigationOptions: {
      header:null,
      title: 'Album',
      headerLeft:null,
      tabBarLabel: "Album",
      tabBarIcon: ({tintColor}) => <Icon name="ios-albums" size={32} color={tintColor} />
    }
  },
  Me: {
    screen: MeScreen,
    navigationOptions: {
      title: 'Me',
      headerLeft:null,
      tabBarLabel: "Me",
      tabBarIcon: ({tintColor}) => <Icon name="ios-person" size={32} color={tintColor} />,
      headerStyle: {
        backgroundColor:'#025268'
      },
      headerTitleStyle: {
        color:'#FFF'
      }
    }
  }
},{
  tabBarOptions: {
    style: {
      height:60,
      backgroundColor:'#025268'
    },
    tabStyle: {
      
    },
    labelStyle:{
      paddingBottom:5,
      color:'#FFF'
    },
    activeTintColor: '#FFF',
    inactiveTintColor:'#AAA'
  }
});

const mainNavigation = StackNavigator ({
  Login:{
    screen: LoginScreen,
    navigationOptions: {
      headerLeft:null,
      title: 'My Photos Album',
      headerStyle: {
        backgroundColor:'#025268'
      },
      headerTitleStyle: {
        color:'#FFF'
      }
    }
  },
  Home: {
    screen: TabNavigation
  }
});

export default mainNavigation;
