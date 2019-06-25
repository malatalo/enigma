import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import VerticalViewPager from "react-native-vertical-view-pager";
import KeyboardView from "./keyboard/KeyboardView";
import RotorView from "./rotor/RotorView";
import PlugboardView from "./plugboard/PlugboardView";

let { width, height } = Dimensions.get("window");
height -= 24;

export default class App extends Component {
  constructor(props) {
    super(props);
    let keys = {};
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => (keys[letter] = false));
    this.state = { keys: keys };
  }

  componentDidMount = () => {
    // SECOND SCREEN
    // setTimeout(
    //   () => this.scrollView.scrollTo({ x: 0, y: height, animated: false }),
    //   1
    // );
    // THIRD SCREEN
    setTimeout(() => this.scrollView.scrollTo({ x: 0, y: height * 2, animated: false }), 1);
  };

  keyPressIn = key => {
    let keys = this.state.keys;
    keys[key] = true;
    this.setState({ keys: keys });
  };

  keyPressOut = key => {
    let keys = this.state.keys;
    keys[key] = false;
    this.setState({ keys: keys });
  };

  render() {
    return (
      <VerticalViewPager
        showsVerticalScrollIndicator={false}
        initialPage={2}
        ref={ref => (this.scrollView = ref)}
      >
        <View style={[styles.page_container, { backgroundColor: "#8D6E63" }]}>
          <RotorView />
        </View>
        <View style={[styles.page_container, { backgroundColor: "#A1887F" }]}>
          <KeyboardView
            keys={this.state.keys}
            keyPressIn={this.keyPressIn}
            keyPressOut={this.keyPressOut}
          />
        </View>
        <View style={[styles.page_container, { backgroundColor: "#8D6E63" }]}>
          <PlugboardView />
        </View>
      </VerticalViewPager>
    );
  }
}

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width,
    height
  }
});
