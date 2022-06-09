import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SendBox = () => {
  return (
    <View style={styles.sendBox}>
      <View style={styles.container}>
        <Text style={styles.one}>One</Text>
        <Text style={styles.two}>Two</Text>
        <Text style={styles.three}>Three</Text>
        <Text style={styles.four}>Four</Text>
      </View>
    </View>
  );
};

export default SendBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "coral",
    // flex: 1,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  one: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
    color: "white",
    fontWeight: "bold",
  },
  two: {
    flex: 1,
    backgroundColor: "red",
    padding: 20,
    color: "white",
    fontWeight: "bold",
  },
  three: {
    flex: 1,
    backgroundColor: "violet",
    padding: 30,
    color: "white",
    fontWeight: "bold",
  },
  four: {
    flex: 1,
    backgroundColor: "blue",
    padding: 40,
    color: "white",
    fontWeight: "bold",
  },
});
