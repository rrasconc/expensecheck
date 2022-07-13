import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { Navigation } from "./src/navigation";

export default function App() {
  return (
    <TailwindProvider>
      <Navigation />
      <StatusBar style="auto" />
    </TailwindProvider>
  );
}
