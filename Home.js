import React, { useEffect } from "react"; //carefull
import {
    StyleSheet,
    View,
    Text,
} from "react-native";

import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDrawerStatusFromState } from "@react-navigation/drawer";

export default function Home ({ navigation }) {

    const [name, setName] = useState("");

    useEffect(()=>{
       getData();
    },[])

    const getData = async () => {
        try {
            await AsyncStorage.getItem("Username")
            .then(value => {
                if (value != null){
                    setName(value)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.body}>
            <Text> Salut {name} !</Text>
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