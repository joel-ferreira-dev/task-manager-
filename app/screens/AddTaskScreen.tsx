import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function AddTaskScreen({ navigation }: { navigation: any }) {
  const { addTask } = useContext(TaskContext)!;
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Adicionar" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
});
