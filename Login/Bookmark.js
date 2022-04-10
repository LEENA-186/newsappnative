
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Dimensions,Image,Linking,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { NewsContext } from '../API/Context';
import  Entypo  from "react-native-vector-icons/Entypo";
import { useContext } from 'react';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

   
const Bookmark = ({ route }) => {
   
    const {
        news: { articles },
        darkTheme,
      } = useContext(NewsContext);
  


const nav = useNavigation();
// console.log("nav",route.params);
const item = route.params.item
// console.log("item",item.item);


return (
      <Card>
        <View style={{ height: windowHeight, width: windowWidth,}}>

          <Image
            source={{ uri: item.urlToImage }}
            style={{ height: "45%", resizeMode: "cover", width:"99%" }}
          />

          <View style={{...styles.description, backgroundColor: darkTheme ? "#282C35" : "white",}}>

            <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
              {item.title}
            </Text>

            <Text style={{ ...styles.content, color: darkTheme ? "white" : "black" }}>
              {item.description}
            </Text>

            <Text style={{ color: darkTheme ? "white" : "black" }}>
              Short by
              <Text style={{ fontWeight: "bold" }}>{" "}{item.author ?? "unknown"}</Text>
            </Text>

            <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{ marginBottom:10,}}>
              
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "white", }}>
                Read More...
              </Text>
              
            </TouchableOpacity>

          </View>
        </View>
      </Card>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Bookmark;
