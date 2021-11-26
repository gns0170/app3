import React, {useContext} from "react";
 
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
 
import SplashScreen from '~/Screens/SplashScreen';
import HomePage from '~/Screens/HomePage';
import Map from '~/Screens/Map';
import Detail from '~/Screens/Detail';


const Stack = createStackNavigator();
 
export default () => {
   return (
       <NavigationContainer>
           <HomePage />
       </NavigationContainer>
   );
};