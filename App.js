import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighLight
} from "react-native";
import { StackNavigator } from "react-Navigation";
import Container from "./components/Container";

const links = [
  { title: "People" },
  { title: "Films" },
  { title: "StarShips" },
  { title: "Vehicles" },
  { title: "Species" },
  { title: "Planets" }
];

class StarWars extends React.Component {
static NavigationOptions ={
  headerTitle: <Image
  style={{width:110, height:64}}
  source {{
    url:"https://raw.githubusercontent.com/dabit"
  }}
  />,
  headerStyle:{backgroundColor:"black", height:110}

}
navigate=(link)=> {
  const {navigate}=this.props.Navigation
  navigate(link)
}

renderItem=({item, index})=> {
  return(
    <TouchableHighLight
    onPress={()=> this.navigate(item.title)}
    style={[styles.item, {borderTopWidth: index === 0? 1: null}]} >
    < Text style={styles.text} > {item.title} </Text>
    </TouchableHighLight>
  )
}


  render() {
    return (
<Container>
  <FlatList>
    data = {links}
    keyExtractor={(item)=> item.title}
    renderItem={this.renderItem}
  </FlatList>
</Container>    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Navigation = StackNavigator({
  StarWars: { Screen: StarWars },
  People: { screen: People }
});
AppRegistry.registerComponent("StarWars", () => Navigation);
