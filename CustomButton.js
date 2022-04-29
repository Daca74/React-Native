import React from "react";
import{
    Pressable,
    Text,
    StyleSheet
} from "react-native";

const CustomButton = (props) => {
    return(
        <Pressable
        onPress={props.onPressFunction}
        hitSlop={{top:10, bottom:50, right:50, left:50}}
        style={({pressed})=>[{backgroundColor: pressed? "#ff00ff" : props.color}, styles.button, {...props.style}]}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
};

export default CustomButton;

const styles = StyleSheet.create({
    text:{
      color:"#000000",
      justifyContent:"center",
      fontSize: 30,
      fontStyle:"italic",
    },
    button:{
      margin:10,
      width:150,
      height:50,
      alignItems:"center",
      justifyContent:'center',
    },
  });