import React from "react";
import { Text, View } from "react-native";

export default class LightbulbKey extends React.Component {
  render() {
    const size = 35;
    const fontSize = 30;
    const borderWidth = 3;

    return (
      <View style={{ padding: 2 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: this.props.light ? "yellow" : "dimgray",
            borderColor: "black",
            width: size,
            height: size,
            borderRadius: size,
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
      </View>
    );
  }
}
