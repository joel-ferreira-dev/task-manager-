// index.tsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddTaskScreen from "./screens/AddTaskScreen";
import { TaskProvider } from "./context/TaskContext";
import TaskListScreen from "./screens/TaskListScreen";
import { PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <TaskProvider>
        <Stack.Navigator initialRouteName="TaskList">
          <Stack.Screen
            name="TaskList"
            component={TaskListScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTaskScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </TaskProvider>
    </PaperProvider>
  );
}
