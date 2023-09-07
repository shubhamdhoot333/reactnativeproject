import { StyleSheet, View, Text, Button, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
export function Main({ navigation }) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}> Main </Text>
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

});