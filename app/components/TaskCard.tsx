import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface TaskCardProps {
  title: string;
  completed: boolean;
  onPress: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ title, completed, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, completed ? styles.completed : styles.pending]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
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
  completed: {
    borderColor: "#4CAF50",
    borderWidth: 2,
  },
  pending: {
    borderColor: "#FFC107",
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
