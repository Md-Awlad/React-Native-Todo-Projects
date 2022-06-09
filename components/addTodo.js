import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [newTodo, setNewTodo] = useState();
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo.."
        onChangeText={(value) => setNewTodo(value)}
      />
      <Button
        onPress={() => submitHandler(newTodo)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    paddingBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
