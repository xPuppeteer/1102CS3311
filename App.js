import React from "react"
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from "./screens/SettingsScreen"
import { FIREBASE_APIKEY,
        FIREBASE_AUTHDOMAIN,
        FIREBASE_PROJECTID,
        FIREBASE_STORAGEBUCKET,
        FIREBASE_MESSAGINGSENDERID,
        FIREBASE_APPID} from 'react-native-dotenv'
import firebase from 'firebase/app'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
console.log(FIREBASE_APIKEY)
const firebaseConfig = 
{
  apiKey: "1",
  authDomain: "2",
  projectId:  "3",
  storageBucket: "4",
  messagingSenderId: "5",
  appId: "6"
}

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})
const Tab = createBottomTabNavigator();
const NavBar = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>

)
export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: NavBar,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)