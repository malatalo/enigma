import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PlugboardKey from "./PlugboardKey";
import Pair from "./Pair";

const qwerty = require("../qwerty.json");

export default class PlugboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: new Array(10).fill().map((val, index) => ({ id: index, one: "", two: "" })),
      waitingForPair: -1
    };
  }

  setWaitingForPair = id => {
    let idToSet = id;
    if (this.state.waitingForPair === id) {
      idToSet = -1;
    } else if (this.state.waitingForPair !== -1) {
      return;
    }
    let pairs = this.state.pairs;
    pairs.filter(pair => pair.id === id).map(pair => (pair.one = pair.two = ""));
    this.setState({ waitingForPair: idToSet, pairs: pairs });
  };

  keyPressed = key => {
    console.log(key);
    if (this.state.waitingForPair === -1) {
      return;
    }

    let waitingForPair = this.state.waitingForPair;
    let pairs = this.state.pairs;
    let index = pairs.findIndex(pair => pair.id === waitingForPair);

    if (pairs[index].one === "") {
      pairs[index] = { ...pairs[index], one: key };
    } else if (pairs[index].two === "") {
      pairs[index] = { ...pairs[index], two: key };
    }
    if (pairs[index].one !== "" && pairs[index].two !== "") {
      waitingForPair = -1;
    }

    this.setState({ pairs, waitingForPair });
  };

  keyIsUsed = key => {
    let bool = false;
    this.state.pairs.forEach(pair => {
      if ((pair.one == key) | (pair.two == key)) {
        bool = true;
      }
    });
    return bool;
  };

  render() {
    return (
      <View style={[styles.mainStyle]}>
        <View style={[styles.keyboard]}>
          <View style={[styles.plugRows]}>
            {this.state.pairs.map(pair => (
              <Pair
                key={pair.id}
                pair={pair}
                waitingForPair={this.state.waitingForPair}
                setWaitingForPair={this.setWaitingForPair}
              />
            ))}
          </View>
        </View>
        <View style={[styles.keyboard]}>
          {qwerty.map(row => (
            <View style={[styles.keyboardRow]} key={row}>
              {row.map(t => (
                <PlugboardKey
                  className={t}
                  text={t}
                  key={t}
                  keyPressed={this.keyPressed}
                  keyIsUsed={this.keyIsUsed}
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
  plugRows: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  keyboard: {
    height: 175,
    width: "90%"
  },
  plugrow: {
    height: 50
  }
});
