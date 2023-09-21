import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ActionCart() {
    return (
        <View>
            <Text style={styles.heading}>Blog </Text>
            <View style={[styles.cart, styles.elvatedcart]}>
                <Text style={styles.cardTitle}> Hawa mahel </Text>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVXJ7cJKTfCovucT0eVtUaCUEL6WiYtugv_tCXqdn&s"
                    }}
                    style={styles.cardImages} />
                <View style={styles.cardBody}>

                    <Text style={styles.cardLabel}> Pink city </Text>
                    <Text style={styles.cardDescription}> The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. </Text>
                </View>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        padding: 10,
    },
    cart: {
        width: 350,
        height: 350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 12,

    },
    elvatedcart: {
        backgroundColor: "#D7C5D2"

    },
    cardImages: {
        height: 200,
        marginBottom: 8,


    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        margin: 3
    },
    cardLabel: {
        fontWeight: "bold",
        fontSize: 16,

    },
    cardDescription: {
        fontSize: 14,
    }



})
