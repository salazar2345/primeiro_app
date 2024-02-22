import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Foto1 from "./src/assets/img 1.png";
import Foto2 from "./src/assets/img2.png";
import Foto3 from "./src/assets/img3.png";
import Foto4 from "./src/assets/img4.webp";
import Foto5 from "./src/assets/img5.jpg";
import Foto6 from "./src/assets/img6.png";
import Header from "./src/assets/Components/Header"

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header/>
      <ScrollView
        contentContainerStyle={{
          gap: 8,
          height: 100,
        }}
        horizontal
        style={{ flexDirection: "row" }}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={Foto1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={Foto2}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={Foto3}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={Foto4}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={Foto5}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={Foto6}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
