import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from "../novo/assets/instagram-logo2.png";
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ width: 200, height: 60 }} source={Logo} />
        <StatusBar style="auto" />
        <View style={styles.edit}>
          <TouchableOpacity>
            <Entypo name="heart-outlined" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="location-arrow" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://media.istockphoto.com/id/183361475/photo/young-man-portrait.jpg?s=612x612&w=0&k=20&c=rctZMSlUZ0qy7ryLHVWq61LhXNM_iFywn7ksRZke_pQ=" }}
        />
        <Image
        style={{width:100, height:100}}
        source={{uri: "https://thumbs.dreamstime.com/z/funny-man-fake-glasses-mustache-30485667.jpg"}}/>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    flexDirection: 'row',
    padding: 10,
    gap: 5,
  },
});