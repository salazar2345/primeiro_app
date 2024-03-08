import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Foto1 from "../assets/img3.png";
import Foto2 from "../assets/img5.jpg";
import Post1 from "../assets/post.png"

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <Header />
      <Stories />
      <Post
        profileImage = {Foto1}
        postImage = {Post1}
        profileName = "Bob Esponja"
        description = "Lorem ipsum dolor sit amet. Sed corporis quas in fuga voluptate ut tenetur excepturi sed tempora quas? Aut velit sint ea ratione culpa non nisi modi. At repellendus nihil in possimus placeat ut pariatur doloremque vel numquam quod aut fugiat asperiores At ullam rerum eum saepe unde! Qui laborum facilis non doloribus accusantium et nesciunt blanditiis 33 labore unde est consequatur soluta aut veritatis quod."
      />
        <Post
        profileImage = {Foto2}
        postImage = {Post1}
        profileName = "Sr Sirigueijo"
        description = "Lorem ipsum dolor sit amet. Sed corporis quas in fuga voluptate ut tenetur excepturi sed tempora quas? Aut velit sint ea ratione culpa non nisi modi. At repellendus nihil in possimus placeat ut pariatur doloremque vel numquam quod aut fugiat asperiores At ullam rerum eum saepe unde! Qui laborum facilis non doloribus accusantium et nesciunt blanditiis 33 labore unde est consequatur soluta aut veritatis quod."
      />
    </ScrollView>
  );
}