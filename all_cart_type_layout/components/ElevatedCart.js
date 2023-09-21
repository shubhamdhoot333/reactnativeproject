import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCart() {
    return (
        <View >
            <Text style={styles.heading}>ElevatedCart</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elvatedcart]}>
                    <Text> tab</Text>
                </View>
                <View style={[styles.card, styles.elvatedcart]}>
                    <Text> me</Text>
                </View>
                <View style={[styles.card, styles.elvatedcart]}>
                    <Text> to </Text>
                </View>
                <View style={[styles.card, styles.elvatedcart]}>
                    <Text> see</Text>
                </View>
                <View style={[styles.card, styles.elvatedcart]}>
                    <Text> more</Text>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        padding: 10,
    },
    container: {
        padding: 10,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 4,


    },
    elvatedcart: {
        backgroundColor: "yellow"
    }


})