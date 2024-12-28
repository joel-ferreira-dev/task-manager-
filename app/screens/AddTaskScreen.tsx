import React, { useState, useContext } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function AddTaskScreen({ navigation }: { navigation: any }) {
  const { tasks, addTask } = useContext(TaskContext)!;
  const [title, setTitle] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleAddTask = () => {
    if (!title.trim()) {
      setFeedbackMessage("O título da tarefa não pode estar vazio.");
      return;
    }
    if (tasks.some((task) => task.title.toLowerCase() === title.toLowerCase())) {
      setFeedbackMessage("Já existe uma tarefa com esse título.");
      return;
    }

    addTask(title);
    setTitle("");
    setFeedbackMessage("Tarefa adicionada com sucesso!");
    // Retorna após 1 segundo (ou ajuste como preferir)
    setTimeout(() => {
      setFeedbackMessage(null);
      navigation.goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* HEADER PERSONALIZADO */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>{"<"} Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adicionar Tarefa</Text>
        {/* Espaço vazio para "centralizar" o título no header */}
        <View style={{ width: 60 }} />
      </View>

      {/* CONTEÚDO PRINCIPAL */}
      <View style={styles.content}>
        <Text style={styles.screenTitle}>Adicionar Nova Tarefa</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a tarefa"
          placeholderTextColor="#888"
          value={title}
          onChangeText={setTitle}
        />

        {/* MENSAGEM DE FEEDBACK */}
        {feedbackMessage && <Text style={styles.feedbackMessage}>{feedbackMessage}</Text>}

        {/* BOTÃO ADICIONAR */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  /* HEADER */
  header: {
    backgroundColor: "#6200EE", // Mesma cor primária do TaskList
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  backButton: {
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* CONTEÚDO PRINCIPAL */
  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  screenTitle: {
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
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  feedbackMessage: {
    fontSize: 14,
    color: "#4CAF50", // Mesma cor da borda/botão para coerência
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#4CAF50", // Botão verde coerente com TaskList
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
