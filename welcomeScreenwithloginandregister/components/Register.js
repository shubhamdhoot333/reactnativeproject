import { StyleSheet, View, Text, Button } from 'react-native';
export function Register({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.headerText}>Register User</Text>
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