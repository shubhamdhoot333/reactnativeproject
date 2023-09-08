
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Main } from './components/Main';
import { CartItem } from "./components/CommonCart"
import { ProductView } from './components/ProductView';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ProductView" component={ProductView} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}

