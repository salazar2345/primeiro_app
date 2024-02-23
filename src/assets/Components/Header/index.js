import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, StyleSheet } from "@expo/vector-icons";
import Logo from "../../assets/instagram-logo.png";

export default function Header(){
    return (
        <View
        style={style.container}
      >
        <Image style={{ width: 150, height: 50 }} source={Logo} />
        <View style={style.icons}>
          <TouchableOpacity>
            <Feather name="heart" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <Feather name="message-circle" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  icons: { flexDirection: "row"},
  icon: { marginLeft: 8 },
})
