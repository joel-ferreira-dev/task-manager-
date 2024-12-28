import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddTaskScreen from "./screens/AddTaskScreen";
import { TaskProvider } from "./context/TaskContext";
import TaskListScreen from "./screens/TaskListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
        <Stack.Navigator initialRouteName="TaskList">
          <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: "Tarefas" }} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: "Adicionar Tarefa" }} />
        </Stack.Navigator>
    </TaskProvider>
  );
}
