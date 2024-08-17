import { View, Button } from "react-native";
import TitleAnimated from "@/components/animations/titleAnimated";

export default function HomeScreen() {
  return (
    <View style={{
      alignItems: "center",
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(to bottom, #400, #192f6a)',
      flex: 1,
    }}>

      <TitleAnimated />
    </View>
  );
}
