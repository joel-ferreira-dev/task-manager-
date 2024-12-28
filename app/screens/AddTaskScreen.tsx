import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TaskContext } from "../context/TaskContext";
import { CustomButton } from "../components/CustomButton";
import { FeedbackMessage } from "../components/FeedbackMessage";

export default function AddTaskScreen({ navigation }: { navigation: any }) {
  const { tasks, addTask } = useContext(TaskContext)!;
  const [title, setTitle] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleAddTask = () => {
    if (!title.trim()) {
      setFeedbackMessage("O título da tarefa não pode estar vazio.");
      return;
    }
    if (
      tasks.some((task) => task.title.toLowerCase() === title.toLowerCase())
    ) {
      setFeedbackMessage("Já existe uma tarefa com esse título.");
      return;
    }

    addTask(title);
    setTitle("");
    setFeedbackMessage("Tarefa adicionada com sucesso!");
    setTimeout(() => {
      setFeedbackMessage(null);
      navigation.goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Nova Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      <FeedbackMessage message={feedbackMessage || ""} />
      <CustomButton
        title="ADICIONAR"
        onPress={handleAddTask}
        backgroundColor="#4CAF50"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
    fontSize: 16,
    marginBottom: 20,
  },
});
