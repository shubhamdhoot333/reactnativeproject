import { StyleSheet, View, Text, Button } from 'react-native';
export function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>login User</Text>
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


});