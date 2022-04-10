import React from "react";
import { Card, Title, Paragraph , Cover, Actions} from 'react-native-paper';
import Entypo  from "react-native-vector-icons/Entypo";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch,useSelector } from "react-redux";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index, darkTheme }) => {
 const navigation = useNavigation();
  const users = useSelector(state => state.users)

  
  const login = users.filter(obj => obj.isLoggedIn === true)

  const check = !login.length ? false :  Boolean(login.map(obj => (obj.isLoggedIn).toString()))
  

  return (
    
    <Card>
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
         transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width:"99%" }}
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282C35" : "white",
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}
        >
          {item.description}
        </Text>
        <Text style={{ color: darkTheme ? "white" : "black" }}>
          Short by
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {item.author ?? "unknown"}
          </Text>
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL(item.url)}
        style={{ marginBottom:10,}}>
          
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white", }}>
            Read More...
           
            </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => check ? navigation.navigate('Bookmark',{item}) : navigation.navigate('Login1')}>
  <Entypo name="bookmark" size={15} color="#007FFF" />
  </TouchableOpacity>
      </View>

         </View>
    </Card>
   
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 12, paddingBottom: 10 },
  footer: {
    height: 60,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
