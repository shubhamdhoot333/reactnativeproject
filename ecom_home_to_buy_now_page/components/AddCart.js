import { StyleSheet, View, ScrollView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from "./CommonCart"
export function AddCart({ navigation }) {
    const [product, setProduct] = useState("");
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = async () => {
        const value = await AsyncStorage.getItem('productArray');
        console.warn(value.json());
    }


    return (
        <ScrollView>
            <View style={styles.container}>

                {/* {
                    product ? product.map((value, index) => {
                        return (
                            <View style={styles.productCart} key={index}>
                                <CartItem product={value} navigation={navigation} />

                            </View>
                        )
                    }
                    ) : null
                } */}


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