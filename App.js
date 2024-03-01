import { StyleSheet, View} from "react-native";
import FotoPerfil from "../primeiro-app/src/assets/perfil.jpg";
import InfoProfile from "./src/components/InfoProfile";
import MyPosts from "./src/assets/Components/MyPosts";

export default function App(){
    return (
        <View style={styles.container}>
            <InfoProfile
            image = {FotoPerfil}
            publi = {180}
            followers = {2000}
            following = {160}
            descriptions="Salazar"/>
            <MyPosts/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        marginHorizontal:16,
        marginVertical:35,
    },
})