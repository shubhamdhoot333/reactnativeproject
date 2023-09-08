import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { heightToDp, widthToDp } from "rn-responsive-screen";


export default function CartItem({ product, navigation }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.info}>
                <View>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>
                        {product.description} • ${product.price}
                    </Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.price}>Rating:{product.rating.rate}</Text>

                </View>
                <View>

                    <Button title="ProductView" onPress={() => navigation.navigate('ProductView', { "paramKey": product.id })} />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderColor: "#e6e6e6",
        width: widthToDp("90%"),
    },
    image: {
        width: widthToDp(30),
        height: heightToDp(30),
        margin: 20,
        borderRadius: 10,

    },
    title: {
        fontSize: widthToDp(4),
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        marginLeft: widthToDp(2),
        flexDirection: "column",
        justifyContent: "space-between",
        marginVertical: heightToDp(3),
        width: widthToDp(50),
    },
    description: {
        fontSize: widthToDp(3.5),
        color: "#8e8e93",
        marginTop: heightToDp(2),
    },

    price: {
        fontSize: widthToDp(4),
    },

});