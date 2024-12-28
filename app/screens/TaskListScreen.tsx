import React, { useContext, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { TaskContext } from "../context/TaskContext";
import { CustomButton } from "../components/CustomButton";
import { FeedbackMessage } from "../components/FeedbackMessage";
import { TaskCard } from "../components/TaskCard";

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
        <FeedbackMessage
          message="Nenhuma tarefa encontrada. Adicione uma nova tarefa!"
          color="#888"
        />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskCard
              title={item.title}
              completed={item.completed}
              onPress={() => toggleTaskStatus(item.id)}
            />
          )}
          contentContainerStyle={styles.taskList}
        />
      )}

      <FeedbackMessage message={message || ""} />

      <CustomButton
        title="ADICIONAR TAREFA"
        onPress={() => navigation.navigate("AddTask")}
        backgroundColor="#4CAF50"
      />
      <CustomButton
        title="LIMPAR CONCLUÍDAS"
        onPress={handleClearCompleted}
        backgroundColor="#F44336"
      />
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
});
