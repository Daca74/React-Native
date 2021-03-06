import React from "react";

function ScreenA({navigation}) {

    const onPressHandler = () => {
      navigation.navigate("Screen_B")
    }
  
    return(
      <View style={styles.body}>
        <Text style={styles.text}>Screen A</Text>
        <Pressable
        onPress={onPressHandler}
        style={({pressed})=>({backgroundColor: pressed? "#ddd" : "#0f0"})}>
          <Text>Go to Screen B</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
  
    text:{
      fontSize:40,
      fontWeight:"bold",
      margin:10
    }
})

export default ScreenA