import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inshorts from './Inshots';
import Login from './Login';
import Language from './Language';
import RatethisApp from './RatethisApp'
import Termsandconditions from './Termsandconditions'
import CustomDrawer from './CustomDrawer';
import Iconicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from '../Login/Redux/Reducers';
import Bookmark from '../Login/Bookmark';
const Drawer = createDrawerNavigator();
const store = createStore(Reducers);

export default function MyDrawer() {
  return (
    <Provider store={store}>
    <Drawer.Navigator drawerContent={props => <CustomDrawer { ...props}/>} screenOptions={{ headerShown: false }} >
      <Drawer.Screen  name="Inshorts" component={Inshorts} options={{drawerIcon:({color})=>(<Iconicons name="home-outline" size={22} color={color}/>)}}/>
      <Drawer.Screen name="Login1" component={Login}  options={{drawerIcon:({color})=>(<Iconicons name="person-outline" size={22} color={color}/>)}}/>
      <Drawer.Screen name="Language" component={Language}  options={{drawerIcon:({color})=>(<FontAwsome name="language" size={22} color={color}/>)}}/>
      <Drawer.Screen name="Bookmark" component={Bookmark} options={{drawerIcon:({color})=>(<Iconicons name="timer-outline" size={22} color={color}/>)}}/>
      <Drawer.Screen name="RatethisApp" component={RatethisApp}  options={{drawerIcon:({color})=>(<FontAwsome name="star-half-full" size={22} color={color}/>)}}/>
      <Drawer.Screen name="Termsandconditions" component={Termsandconditions}  options={{drawerIcon:({color})=>(<AntDesign name="form" size={22} color={color}/>)}}/>
      </Drawer.Navigator>
      </Provider>
  );
}
