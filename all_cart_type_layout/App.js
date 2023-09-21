import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import FlatCart from './components/FlatCart';
import ElevatedCart from './components/ElevatedCart';
import FancyCart from './components/FancyCart';
import ActionCart from './components/ActionCart';
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatCart />
          <ElevatedCart />
          <FancyCart />
          <ActionCart />
        </View>
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

});
