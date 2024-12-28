import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  style?: object; // Permite adicionar estilos adicionais
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#4CAF50", // Cor padrão: verde
  textColor = "#FFF", // Cor padrão do texto: branco
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]} // Combina estilos personalizados com os padrões
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
