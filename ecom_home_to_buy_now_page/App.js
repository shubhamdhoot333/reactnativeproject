
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Main } from './components/Main';
import { ProductView } from './components/ProductView';
import { Address } from './components/Address';
import { BuyNow } from "./components/BuyNow"
import { Thanks } from './components/Thanks';
import { AddCart } from './components/AddCart';

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
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="BuyNow" component={BuyNow} />
        <Stack.Screen name="Thanks" component={Thanks} />
        <Stack.Screen name="AddCart" component={AddCart} />


      </Stack.Navigator>
    </NavigationContainer>


  );
}

