import { StyleSheet, View, Text, Button } from 'react-native';
export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>Welcome User</Text>
            </View>
            <View style={styles.buttonText}>
                <View style={styles.buttonstyle}>
                    <Button title="Login" onPress={() => navigation.navigate('Login')} />
                </View>
                <View style={styles.buttonstyle}>
                    <Button title="Register" onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    buttonText: {
        marginTop: 400,
        padding: 10,

    },
    buttonstyle: {
        margin: 10,
    }

});