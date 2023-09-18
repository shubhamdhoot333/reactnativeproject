import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightToDp, widthToDp } from "rn-responsive-screen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
export function ProductView({ route, navigation }) {
    const id = route.params.paramKey;
    console.warn(id);
    const [product, setProduct] = useState("");
    useEffect(() => {

        getAllProduct();
    }, []);

    const getAllProduct = async () => {
        console.warn(id, "infunction ")
        const pdata = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(pdata.data);
    }
    // const setData = (product) => {
    //     const productArray = [];
    //     productArray.push(product)

    //     AsyncStorage.setItem(
    //         'productArray',
    //         productArray,
    //     );
    //     navigation.navigate('AddCart');

    // }

    return (
        <ScrollView>

            <View style={styles.container}>
                {/* <Text>{product.images.length} </Text> */}
                {
                    product.images &&
                    <Image source={{
                        uri: product.images[0]
                    }} style={styles.image} />


                }

                <View style={styles.info}>
                    <View>
                        <Text style={styles.title}> {product.title}</Text>
                    </View>

                    <Text style={styles.description}>
                        {product.description}
                    </Text>

                    <Text style={styles.price}>
                        Price : {product.price}
                    </Text>

                    <View style={{ height: 50, width: 225, marginTop: 10, marginLeft: 70 }}>
                        <Button title="Buy Now" onPress={() => navigation.navigate('Address', { "paramKey": product.id })} />
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

});