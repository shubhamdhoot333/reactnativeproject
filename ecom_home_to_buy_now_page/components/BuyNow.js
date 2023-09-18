import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightToDp, widthToDp } from "rn-responsive-screen";
export function BuyNow({ route, navigation }) {
    const id = route.params.paramKey;
    const addressdata = route.params.paramKey1[0];

    const [product, setProduct] = useState("");
    useEffect(() => {
        getAllProduct();
    }, []);

    const getAllProduct = async () => {
        await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }


    return (
        <ScrollView>

            <View style={styles.container}>
                {
                    product.images && <Image source={{ uri: product.images[0] }} style={styles.image} />
                }
                <View style={styles.info}>
                    <View>
                        <Text style={styles.title}> {product.title}</Text>
                    </View>

                    <Text style={styles.description} >
                        {product.description}
                    </Text>

                    <Text style={styles.price}>
                        Price : {product.price}
                    </Text>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                        Customer Address
                    </Text>
                    <Text style={styles.tableCell} >
                        Name:{addressdata.name}
                    </Text>
                    <Text style={styles.tableCell}>
                        Email:{addressdata.email}
                    </Text>
                    <Text style={styles.tableCell}>
                        Phone:{addressdata.phone}
                    </Text>
                    <Text style={styles.tableCell}>
                        Address:{addressdata.address}
                    </Text>
                    <View style={{ height: 50, width: 225, marginTop: 10, marginLeft: 70 }}>
                        <Button title="BuyNow" onPress={() => navigation.navigate('Thanks')} />
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

    description: {
        fontSize: widthToDp(4),
        color: "#8e8e93",
        marginTop: heightToDp(2),
        marginLeft: 50,
    },

    price: {
        marginTop: 20,
        marginLeft: 130,
        fontSize: widthToDp(4),
        height: 50, width: 225,
    },
    tableCell: {
        marginTop: 10,
        marginLeft: 50,
        fontSize: widthToDp(5),
        textAlign: "center"
    }

});