import { View } from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />
    </View>
  );
}