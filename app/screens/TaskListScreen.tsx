import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function TaskListScreen({ navigation }: { navigation: any }) {
  const { tasks, toggleTaskStatus, clearCompleted } = useContext(TaskContext)!;

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleTaskStatus(item.id)} style={styles.taskItem}>
            <Text style={item.completed ? styles.completed : styles.pending}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate("AddTask")} />
      <Button title="Limpar Concluídas" onPress={clearCompleted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  taskItem: { padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
  completed: { textDecorationLine: "line-through", color: "gray" },
  pending: { color: "black" },
});
