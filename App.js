import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <TailwindProvider>
      <Home />
      <StatusBar style="auto" />
    </TailwindProvider>
  );
}
