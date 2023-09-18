import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
export function Address({ route, navigation }) {
    const id = route.params.paramKey;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const getData = async () => {
        if (!email || !phone || !name || !address) {
            alert('Please fill field properly');
            return
        }
        else {

            if (phone.length == 10) {
                alert('phone must be 10 digit');
                return
            }
            else {
                const addressdata = [];
                addressdata.push({ name, email, phone, address })
                if (addressdata) {
                    navigation.navigate('BuyNow', { "paramKey": id, "paramKey1": addressdata })
                }
                else {
                    console.warn("plz add address");
                }

            }

        }

    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> Order</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setName(text)}
                />
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
                    placeholder="Phone"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPhone(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry
                    placeholder="Address"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setAddress(text)}
                />
            </View>

            <View>
                <Button title={"Save Address"} onPress={() => getData()} />
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