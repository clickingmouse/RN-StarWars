import React, { Component } from "react";
import {
  Stylesheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  FlatList,
  Modal,
  Picker
} from "react-native";
import _ from "lodash";

import Container from "./Container";
import HomeWorld from "./HomeWorld";

export default class People extends Component {
  static navigationOptions ={
    headerTitle ={
      headerStyle:{
        borderBottomWidth:1,
        borderBottomColor:'#ffe81f',
        backgroundColor:'black'
      },
      headerTitleStyle :{
        color :'#ffe81f'
      },
      pressColorAndroid : 'white'
    }
  }
}