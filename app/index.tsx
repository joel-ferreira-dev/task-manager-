// index.tsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddTaskScreen from "./screens/AddTaskScreen";
import { TaskProvider } from "./context/TaskContext";
import TaskListScreen from "./screens/TaskListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{ 
            title: "Tarefas",
            headerTitle: "Tarefas" // Adicione esta linha também
          }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ 
            title: "Adicionar Tarefa",
            headerTitle: "Adicionar Tarefa" // Adicione esta linha também
          }}
        />
      </Stack.Navigator>
    </TaskProvider>
  );
}