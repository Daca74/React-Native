import { View, Image, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

import CustomButton from "./CustomButton";
import { NavigationContainer } from "@react-navigation/native";

export default function Login({navigation}) {
    const [name, setName] = useState("");
    
    const setData = async() => {
        if (name.length > 0) {
            try {
                await AsyncStorage.setItem("Username", name);
                navigation.navigate("Home");
            } catch (error) {
                console.log(error)
            }
        }
        else {
            Alert.alert("Warning! Please write your name to proceed")
        }
    }
    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require("./assets/asyncstorage.png")}>
            </Image>
            <Text style={styles.text}>Async Storage Tutorial</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={(value) => setName(value)}
            ></TextInput>
            <CustomButton title="Login" color="#1eb900" onPressFunction={setData}></CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:"center",
      backgroundColor:"#0080ff"
    },
    logo:{
      width: 100,
      height: 100,
      margin: 20,
    },
    text:{
      fontSize: 30,
      color: '#ffffff',
    }
  })