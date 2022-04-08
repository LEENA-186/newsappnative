
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image ,ImageBackground,TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Iconicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import News from '../assets/News.png'
import mini from'../assets/mini.png'
const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} 
            contentContainerStyle={{backgroundColor:'#060636'}}>
                <ImageBackground source={require('../assets/News.png')} style={{padding:20}}>
                    <Image source={require('../assets/mini.png')} 
                    style={{height:100,width:100,borderRadius:50,marginBottom:20}}
                    />
                    <Text style={{color:'#fff',fontSize:20,marginBottom:5}}>User</Text>
                    <Text style={{color:'#fff',fontSize:18,marginRight:5}}>User@gmail.com</Text>
                <MaterialCommunityIcons name="email" size={14} color="#fff"/>
                 </ImageBackground>
                 <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
            <DrawerItemList {...props}/>
            </View>
            </DrawerContentScrollView>
            <View style={{padding:20,borderTopWidth:1,BorderTopColor:'#ccc'}}>
                <TouchableOpacity style={{paddingVertical:10}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Iconicons name="share-social-outline" size={22}/>
                <Text style={{fontSize:15,marginLeft:5}}> Share this App</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;
