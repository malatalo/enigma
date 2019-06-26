import React from "react";
import { View, StyleSheet } from "react-native";
import KeyboardKey from "./KeyboardKey";
import LightbulbKey from "./LightbulbKey";

const qwerty = require("../qwerty.json");

export default class KeyboardView extends React.Component {
  render() {
    return (
      <View style={[styles.mainStyle]}>
        <View style={[styles.keyboard]}>
          {qwerty.map(row => (
            <View style={[styles.keyboardRow]} key={row}>
              {row.map(t => (
                <LightbulbKey
                  text={t}
                  key={t}
                  light={this.props.keys[t]}
                />
              ))}
            </View>
          ))}
        </View>
        <View style={[styles.keyboard]}>
          {qwerty.map(row => (
            <View style={[styles.keyboardRow]} key={row}>
              {row.map(t => (
                <KeyboardKey
                  text={t}
                  key={t}
                  keyPressIn={this.props.keyPressIn}
                  keyPressOut={this.props.keyPressOut}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  keyboardRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 20,
    height: 10
  },
  keyboard: {
    height: 175
  }
});
