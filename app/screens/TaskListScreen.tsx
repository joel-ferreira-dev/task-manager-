import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TaskContext } from "../context/TaskContext";
// Exemplo de FAB com a lib "react-native-paper"
import { FAB } from "react-native-paper"; 
// Caso não queira biblioteca externa, você pode usar um TouchableOpacity estilizado como FAB.

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
      {/* HEADER CUSTOMIZADO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gerenciador de Tarefas</Text>
        <TouchableOpacity style={styles.trashButton} onPress={handleClearCompleted}>
          <Text style={styles.trashButtonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* MENSAGEM DE FEEDBACK */}
      {message && <Text style={styles.feedbackMessage}>{message}</Text>}

      {/* LISTA DE TAREFAS */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.taskListContainer}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Nenhuma tarefa encontrada.</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              item.completed ? styles.cardCompleted : styles.cardPending,
            ]}
            onPress={() => toggleTaskStatus(item.id)}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* BOTÃO FLOTANTE (FAB) PARA ADICIONAR TAREFA */}
      <FAB
        style={styles.fab}
        icon="plus"
        label="Adicionar"
        onPress={() => navigation.navigate("AddTask")}
        color="#FFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6F9",
  },
  header: {
    backgroundColor: "#6200EE", // Cor primária do seu app
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  trashButton: {
    padding: 10,
  },
  trashButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  feedbackMessage: {
    backgroundColor: "#C8FACD",
    color: "#2E7D32",
    textAlign: "center",
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
  taskListContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 80, // Deixa espaço para o FAB
  },
  emptyMessage: {
    color: "#888",
    fontSize: 16,
    marginTop: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    // Sombras
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: "#333",
  },
  cardPending: {
    borderLeftWidth: 4,
    borderLeftColor: "#FFC107",
  },
  cardCompleted: {
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50",
    opacity: 0.7,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#03DAC5", // Cor secundária
  },
});
