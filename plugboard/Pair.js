import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class Pair extends React.Component {
  constructor(props) {
    super(props);
    console.log("init");
  }
  render() {
    return (
      <TouchableOpacity
        onPressIn={() => this.props.setWaitingForPair(this.props.pair.id)}
        style={[
          styles.pair,
          this.props.waitingForPair === this.props.pair.id ? styles.waiting : styles.normal
        ]}
      >
        <Text style={[styles.text]}>
          {this.props.pair.one} | {this.props.pair.two}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  pair: {
    width: 50,
    height: 40,
    margin: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderRadius: 0,
    borderWidth: 3
  },
  normal: {
    backgroundColor: "gray"
  },
  waiting: {
    backgroundColor: "#D3D3D3"
  },
  text: {
    color: "white"
  }
});
