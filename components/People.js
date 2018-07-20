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
  state={
    data:[],
    loading:true,
    modalVisible:false,
    gender:'all',
    pickerVisible:false
  }
  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then(res=>res.json())
    .then(json=>this.setState({data:json.results,loading:false}))
    .catch((err)=>console.log('err',err))
  }
}