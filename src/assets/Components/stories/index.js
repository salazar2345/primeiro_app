import Foto1 from "./src/assets/yag.jpg";
import { StyleSheet, Image, ScrollView,TouchableOpacity } from "react-native";

export default function Stories() {
    return(
        <ScrollView
        contentContainerStyle={style.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Image
            style={style.story}
            source={Foto1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={style.story}
            source={Foto1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={style.story}
            source={Foto1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={style.story}
            source={Foto1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={style.story}
            source={Foto1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={style.story}
            source={Foto1}
          />
        </TouchableOpacity>
      </ScrollView>
    )
}

const styles = StyleSheet.create ({
    container: {
        gap: 8,
        height: 100,
    },
    story: {width: 100, height: 100, borderRadius: 50},
})