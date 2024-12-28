import React, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function TaskListScreen({ navigation }: { navigation: any }) {
  const { tasks, toggleTaskStatus, clearCompleted } = useContext(TaskContext)!;
  const [message, setMessage] = useState<string | null>(null);

  const handleClearCompleted = () => {
    if (tasks.some((task) => task.completed)) {
      clearCompleted();
      setMessage("Tarefas concluídas removidas!");
    } else {
      setMessage("Você não selecionou nenhuma tarefa para excluir.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      {tasks.length === 0 ? (
        <Text style={styles.emptyMessage}>Nenhuma tarefa encontrada. Adicione uma nova tarefa!</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => toggleTaskStatus(item.id)}
              style={[styles.taskCard, item.completed ? styles.taskCompleted : styles.taskPending]}
            >
              <Text style={styles.taskText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.taskList}
        />
      )}

      {message && <Text style={styles.feedbackMessage}>{message}</Text>}

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddTask")}>
        <Text style={styles.buttonText}>ADICIONAR TAREFA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={handleClearCompleted}>
        <Text style={styles.buttonText}>LIMPAR CONCLUÍDAS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  taskList: {
    paddingBottom: 20,
  },
  taskCard: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#FFF",
  },
  taskCompleted: {
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  taskPending: {
    borderColor: "#FFC107",
    borderWidth: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  clearButton: {
    backgroundColor: "#F44336",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyMessage: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  feedbackMessage: {
    fontSize: 14,
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
});
