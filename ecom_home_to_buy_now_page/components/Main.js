import { StyleSheet, View, ScrollView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import CartItem from "./CommonCart"
export function Main({ navigation }) {
    const [product, setProduct] = useState("");
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = () => {
        // fetch('https://fakestoreapi.com/products')
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
            .then(res => res.json())
            .then(json => {
                setProduct(json);
            })
    }


    return (
        <ScrollView>
            <View style={styles.container}>

                {
                    product ? product.map((value, index) => {
                        return (
                            <View style={styles.productCart} key={index}>
                                <CartItem product={value} navigation={navigation} />

                            </View>
                        )
                    }
                    ) : null
                }


            </View >
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});