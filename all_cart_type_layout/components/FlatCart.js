import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCart() {
    return (
        <View >
            <Text style={styles.heading}>Flat Cart</Text>
            <View style={styles.container}>

                <View style={[styles.cart, styles.cart1]}>
                    <Text>Red </Text>
                </View>
                <View style={[styles.cart, styles.cart2]}>
                    <Text>Blue </Text>
                </View>
                <View style={[styles.cart, styles.cart3]}>
                    <Text>Green </Text>
                </View>

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        marginTop: 10,
        padding: 10,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 15

    },
    cart: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cart1: {
        backgroundColor: "red"
    },
    cart2: {
        backgroundColor: "blue"
    },
    cart3: {
        backgroundColor: "green"
    },



})