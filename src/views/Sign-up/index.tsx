import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";

export const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "red",
        fontSize: 24,
        marginBottom: 20,
    },
});
