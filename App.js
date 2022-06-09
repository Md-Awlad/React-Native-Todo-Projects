import react, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/addTodo";
import Header from "./components/header";
import SendBox from "./components/sendbox";
import TodoItem from "./components/todoItem";

export default function App() {
  // const [name, setName] = useState("Awlad");
  // const [age, setAge] = useState("20");

  // const [people, setPeople] = useState([
  //   { name: "Awlad", id: "1" },
  //   { name: "Naser Rifat", id: "2" },
  //   { name: "Tuhin", id: "3" },
  //   { name: "Samira", id: "4" },
  //   { name: "Hridoy", id: "5" },
  //   { name: "Abdul Ali", id: "6" },
  //   { name: "Emran", id: "7" },
  //   { name: "Nayeem", id: "8" },
  //   { name: "Abir", id: "9" },
  // ]);

  // const pressHandler = (id) => {
  //   // console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter((person) => person.id != id);
  //   });
  // };

  const [todos, setTodos] = useState([
    { text: "Buy Coffee", id: "1" },
    { text: "Create an App", id: "2" },
    { text: "play on the switch", id: "3" },
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (text) => {
    if (text?.length > 5) {
      setTodos((prevTodo) => {
        return [{ text: text, id: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("oops!", "Todo must be over 5 chars long", [
        { text: "Understand", onPress: (e) => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <SendBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed keyboard");
      }}
    >
      <View style={styles.container}>
        {/* --input data-- */}
        {/* <Text>Your Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Name"
        onChangeText={(value) => setName(value)}
      />
      <Text>Your Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Age"
        onChangeText={(value) => setAge(value)}
      />
      <Text>My name is {name}</Text>
      <Text>My age is {age}</Text> */}

        {/* --map data-- */}
        {/* --second system-- */}
        {/* <FlatList
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}
        {/* --first system-- */}
        {/* <ScrollView>
        {people.map((item) => (
          <View key={key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

        {/* --header-- */}
        <Header />
        <View style={styles.content}>
          {/* --form-- */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   paddingTop: 40,
  //   paddingHorizontal: 20,
  // },
  // input: {
  //   borderWidth: 2,
  //   width: "50%",
  //   marginBottom: 10,
  // },
  // item: {
  //   marginTop: 24,
  //   padding: 20,
  //   backgroundColor: "pink",
  //   fontSize: 24,
  //   marginTop: 24,
  //   marginHorizontal: 10,
  // },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 24,
  },
});
