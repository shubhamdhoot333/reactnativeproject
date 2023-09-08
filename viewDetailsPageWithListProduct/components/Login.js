import { StyleSheet, View, Text, Button, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
export function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const getData = () => {
        if (!email || !password) {
            alert('Please fill field properly');
            return
        }
        else {
            if (password.length < 8) {
                alert('password must be 8 digit');
                return
            }
            else {
                navigation.navigate('Main')
            }

        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> User Login </Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <View>
                <Button title={"Login"} onPress={() => getData()} />
            </View>
            <View style={{ paddingTop: 30 }}>
                <Text onPress={() => navigation.navigate('Register')}> Want to Register</Text>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4FD3DA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#fb5b5a",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },


});