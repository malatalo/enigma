import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class KeyboardKey extends React.Component {
  render() {
    const size = 35;
    const fontSize = 30;
    const borderWidth = 3;

    return (
      <TouchableOpacity
        onPressIn={() => !this.props.keyIsUsed(this.props.text) && this.props.keyPressed(this.props.text)}
        style={{ padding: 2 }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "gray",
            borderColor: "black",
            width: size,
            height: size*1.5,
            borderRadius: 0,
            borderWidth: borderWidth
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: fontSize - 2 * borderWidth,
              lineHeight: fontSize - borderWidth + 1
            }}
          >
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
