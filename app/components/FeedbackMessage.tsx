import React from "react";
import { Text, StyleSheet } from "react-native";

interface FeedbackMessageProps {
  message: string;
  color?: string; // Permite personalizar a cor
}

export const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  message,
  color = "#4CAF50", // Cor padrão: verde
}) => {
  if (!message) return null;

  return <Text style={[styles.message, { color }]}>{message}</Text>;
};

const styles = StyleSheet.create({
  message: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
});
