import {Image, StyleSheet, View ,Text} from 'react-native';

export default function InfoProfile({image,publi,followers,following,description}){
    return(
        <View>
            <Image source ={image} style={styles.story}/>
        <View>
            <Text style={styles.publi}>{publi}</Text>
            <Text style={styles.followers}>{followers}</Text>
            <Text style={styles.following}>{following}</Text>
            <Text style={styles.publi2}>Publicações</Text>
            <Text style={styles.followers2}>Followers</Text>
            <Text style={styles.following2}>Following</Text>
        </View>
        </View>
    );
}
const styles=StyleSheet.create({
    story:{width: 100, height: 100, borderRadius:50},
    publi:{width: 40, height: 100, marginHorizontal: 150 ,marginVertical:-80 , fontSize:20},
    followers:{width: 50, height: 100, marginHorizontal: 230 , marginVertical:-20, fontSize:20},
    following:{width: 40, height: 100, marginHorizontal: 320 , marginVertical:-80, fontSize:20},
    publi2:{width: 105, height: 100, marginHorizontal: 125},
    followers2:{width: 70, height: 100, marginHorizontal: 225, marginVertical:-100},
    following2:{width: 70, height: 100, marginHorizontal:305},
});