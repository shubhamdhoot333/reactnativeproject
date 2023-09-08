import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightToDp, widthToDp } from "rn-responsive-screen";
export function ProductView({ route }) {
    const id = route.params.paramKey;
    const [product, setProduct] = useState("");
    useEffect(() => {
        getAllProduct();
    }, []);

    const getAllProduct = async () => {
        await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }


    return (
        <ScrollView>

            <View style={styles.container}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <View style={styles.info}>
                    <View>
                        <Text style={styles.title}> {product.title}</Text>
                    </View>

                    <Text style={styles.description}>
                        {product.description}  ${product.price}
                    </Text>

                    <Text style={styles.price}>
                        Price : {product.price}
                    </Text>

                    <View style={{ height: 50, width: 200, marginTop: 10, marginLeft: 70 }}>
                        <Button title="Buy Now" />
                    </View>
                    <View style={{ height: 50, width: 200, marginLeft: 70 }}>
                        <Button title="Add To Cart" />
                    </View>

                </View>
            </View>

        </ScrollView >
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: "#e6e6e6",
        width: widthToDp("90%"),
    },
    image: {
        width: widthToDp(60),
        height: heightToDp(60),
        marginTop: 20,
        marginLeft: 70,
        marginBottom: 20,
        borderRadius: 10,

    },
    title: {
        marginLeft: 50,
        marginBottom: 15,
        fontWeight: "bold",

    },
    // footer: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    // },
    // info: {
    //     marginLeft: widthToDp(2),
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     marginVertical: heightToDp(3),
    //     width: widthToDp(50),
    // },
    description: {
        fontSize: widthToDp(4),
        color: "#8e8e93",
        marginTop: heightToDp(2),
        marginLeft: 50,
    },

    price: {
        marginTop: 20,
        marginLeft: 70,
        fontSize: widthToDp(4),
    },

});