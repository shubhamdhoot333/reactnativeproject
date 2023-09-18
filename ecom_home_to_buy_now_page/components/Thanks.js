import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightToDp, widthToDp } from "rn-responsive-screen";
export function Thanks({ navigation }) {
    return (
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.thanks}>
                    Thank You For buying the product hope you will come next Time
                </Text>
                <View style={{ height: 50, width: 225, marginTop: 10, marginLeft: 70 }}>
                    <Button title="Main" onPress={() => navigation.navigate('Main')} />
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
        fontSize: 15
    },


});