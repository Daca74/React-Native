import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, StyleSheet, Text, View, Linking, AppState, ScrollView, RefreshControl, FlatList, SectionList, TextInput, Touchable, TouchableOpacity, Pressable, Alert, Modal, ImageBackgroundBase} from 'react-native';
import { useState } from 'react';
import CustomButtom from './CustomButton';
/*import ScreenA from '.ScreenA';
import ScreenB from '.ScreenB';

export default function App() {
  const [counter, setCounter] = useState("5: 20"); 
  const [clicks, setClicks] = useState({number:4});

  const onClickHandler = () => {
    setCounter("5: 20");
    setClicks({number:4})
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Your clicks multiplied by {counter}!</Text>
      <Text style = {styles.text}>We are in session number {clicks.number}</Text>
      <Button title="Click me" onPress={onClickHandler}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:10,
    borderColor: "#ffffff",
    borderRadius:10,

  },

  text:{
    color: "blue",
    fontSize: 20,
    margin: 10
  },

  button:{
    width:300,
    height:100
  }


});


//--responsive ui with flexbox--//
export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
      </View>
      <View style={styles.container1}>
      <View style={styles.view4}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text}>5</Text>
      </View>
      </View>
      <View style={styles.container2}>
      <View style={styles.view6}>
        <Text style={styles.text}>6</Text>
      </View>
      <View style={styles.view7}>
        <Text style={styles.text}>7</Text>
      </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  body: {
    flex:1,
    backgroundColor: '#000000',
  },

  container:{
    flex:1,
    height:10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  container1:{
    flex:1,
    height:10,
    flexDirection:'column',
    justifyContent: 'flex-end',
  },

  container2:{
    flex:3,
    height:100,
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent: 'flex-end',
  },
    
  view1:{
    flex:1,
    backgroundColor: "#00ffff",
    alignItems:"center",
    justifyContent:"center"
  },

  view2:{
    flex:2,
    backgroundColor: "#ff00ff",
    alignItems:"center",
    justifyContent:"center"
  },

  view3:{
    flex:3,
    backgroundColor: "#ffff00",
    alignItems:"center",
    justifyContent:"center"
  },

  view4:{
    flex:1,
    backgroundColor: "#ff0f00",
    alignItems:"center",
    justifyContent:"center"
  },

  view5:{
    flex:1,
    backgroundColor: "#0fff00",
    alignItems:"center",
    justifyContent:"center"
  },
  
  view6:{
    flex:1,
    backgroundColor: "#fffff0",
    alignItems:"center",
    justifyContent:"center"
  },

  view7:{
    flex:1,
    backgroundColor: "#0000ff",
    alignItems:"center",
    justifyContent:"center"
  },

  text:{
    color: "#000000",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10
  }

});

//--LIST--//

export default function App() {
  const [Items, setItems] = useState([
    {key:1, item: "Items 1"},
    {key:2, item: "Items 2"},
    {key:3, item: "Items 3"},
    {key:4, item: "Items 4"},
    {key:5, item: "Items 5"},
    {key:6, item: "Items 6"},
    {key:7, item: "Items 7"},
    {key:8, item: "Items 8"}
  ])


  const onRefreshFunction = () => {
    setItems([...Items, {key:9, item:"NEW ITEM ADDED"}]);
  }

  return (
    <View style={styles.body}>
      <ScrollView refreshControl={<RefreshControl onRefresh={onRefreshFunction}></RefreshControl>}>
      {
        Items.map((result)=>{
          return(
            <View style={styles.item} key={result.key}>
              <Text style={styles.text} key={result.item}>{result.item}</Text>
            </View>
          )
        })
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection: "column",
    backgroundColor: '#ffffff',
  },

  item:{
    margin:8,
    backgroundColor: "#4ae1fa",
    alignItems: 'center',
    justifyContent: 'center',
  },
})

//--flatlist code--//
export default function App() {
  const [Items, setItems] = useState([
    {itemName: "Item 1"},
    {itemName: "Item 2"},
    {itemName: "Item 3"},
    {itemName: "Item 4"},
    {itemName: "Item 5"},
    {itemName: "Item 6"},
    {itemName: "Item 7"},
    {itemName: "Item 8"},
  ])


  const onRefreshFunction = () => {
    setItems([...Items, {key:9, item:"NEW ITEM ADDED"}]);
  }

  return (
    <FlatList
    horizontal
    keyExtractor={(item, index)=>index.toString()}
    data={Items}
    renderItem={({item})=>(
    <View style={styles.item}>
      <Text style={styles.text}>{item.itemName}</Text>
    </View>)}>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection: "column",
    backgroundColor: '#ffffff',
  },

  item:{
    margin:8,
    backgroundColor: "#4ae1fa",
    alignItems: 'center',
    justifyContent: 'center',
  },
})

//--flatlist&sectionlist--//
export default function App() {

  const DATA = [    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2"],
    },
    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2"],
    },
    {
      title: "Title 3",
      data: ["Item 3-1", "Item 3-2"],
    },
    {
      title: "Title 4",
      data: ["Item 4-1", "Item 4-2"],
    },
  ]
  return (
    <SectionList
    keyExtractor={(item, index)=>index.toString()}
    sections={DATA}
    renderItem={({item})=>(
      <Text style={styles.text}>{item}</Text>
    )}
    renderSectionHeader={({section})=>(
      <View style={styles.item}>
        <Text style={styles.text}>{section.title}</Text>
      </View>
    )}
    >
    </SectionList>

  );
}

const styles = StyleSheet.create({
  body: {
    flex:1, 
    flexDirection:"column",
    backgroundColor: '#ffffff',
  },

  item:{
    margin: 8,
    backgroundColor: "#4ae1fa",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "#000000",
    fontSize: 50,
    fontStyle: "italic",
    margin:10
  }
});*/

//--TextInput--//
/*export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write down your name:
      </Text>
      <TextInput style={styles.input} placeholder='e.g. John'onChangeText={(value)=>setName(value)}></TextInput>
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: "center"
  },

  text:{
    color: "#000000",
    fontSize: 30,
    fontStyle: "italic",
    margin:20
  },

  input:{
    width:200,
    borderWidth:1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  }
});
*/
//--button,touchable&pressable--//
/*export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () =>{
    setSubmitted(!submitted)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write down your name:
      </Text>
      <TextInput style={styles.input} 
                 placeholder='e.g. John'
                 onChangeText={(value)=>setName(value)}></TextInput>
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top:10, bottom:50, right:50, left:50}}
        style={({pressed})=>[{backgroundColor: pressed? "#ff00ff" : "#00ff00"}]}>
        <Text>{submitted? "Clear":"Submit"}</Text>
      </Pressable>
      {submitted? <Text style={styles.text}>You are registered as {name}</Text>: null}
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: "center"
  },

  text:{
    color: "#000000",
    fontSize: 30,
    fontStyle: "italic",
    margin:20
  },

  input:{
    width:200,
    borderWidth:1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  },

  button:{
    width: 150,
    height: 50,
    backgroundColor:"#00ff00",
    alignItems: "center",
    justifyContent: 'center'
  }
});
*/
//--Alert--//
/*export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () =>{
    if (name.length>0){
    setSubmitted(!submitted)
    }
    else{
      Alert.alert("Warning", "A name must be entered",[
        {
          text: "Do not show again",
          onPress: () => console.warn("Do not show Pressed!")
        },
        {
          text: "OK",
          onPress: () => console.warn("Alert dismissed.")
        },
      ], {cancelable: true, onDismiss: () => console.warn("Au revoir.")})
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write down your name:
      </Text>
      <TextInput style={styles.input} 
                 placeholder='e.g. John'
                 onChangeText={(value)=>setName(value)}></TextInput>
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top:10, bottom:50, right:50, left:50}}
        style={({pressed})=>[{backgroundColor: pressed? "#ff00ff" : "#00ff00"}]}>
        <Text>{submitted? "Clear":"Submit"}</Text>
      </Pressable>
      {submitted? <Text style={styles.text}>You are registered as {name}</Text>: null}
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: "center"
  },

  text:{
    color: "#000000",
    fontSize: 30,
    fontStyle: "italic",
    margin:20
  },

  input:{
    width:200,
    borderWidth:1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  },

  button:{
    width: 150,
    height: 50,
    backgroundColor:"#00ff00",
    alignItems: "center",
    justifyContent: 'center'
  }
});*/

/*
//--basic modal--//
export default function App() {
  const [name, setName] = useState("");
  const [showWarning, setshowWarning] = useState(false);

  const onPressHandler = () =>{
    if (name.length > 0){
      setshowWarning(true)
    }
    else{
     setshowWarning(true)
    }
  }

  return (
   <View style={styles.body}>
     <Modal
     transparent
        visible={showWarning}
        onRequestClose={() => setshowWarning(false)}
        animationType='slide'>
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text style={styles.text}>WARNING!</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>Please enter your name</Text>
              </View>
              <Pressable onPress={() => setshowWarning (false)} style={styles.warning_button}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.text}>
          What is your name ? 
        </Text>
        <TextInput style={styles.input}
        placeholder='e.g John'
        onChangeText={(value) => setName(value)}></TextInput>
        <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, bottom: 50, left: 50, right: 50}}
        style={({pressed}) =>[{backgroundColor: pressed? "#0000" : "#333"}]}>
          <Text style={styles.text}>Say hello</Text>
        </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: "center"
  },

  text:{
    color: "#000000",
    fontSize: 30,
    fontStyle: "italic",
    margin:20
  },

  input:{
    width:200,
    borderWidth:1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  },

  button:{
    width: 50,
    height: 50,
    backgroundColor:"#0000",
    alignItems: "center",
    justifyContent: 'center'
  },

  centered_view:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },

  warning_modal:{
    width: 300,
    height: 300,
    backgroundColor: "#333",
    borderWidth:1,
    borderColor:"#000",
    borderRadius:20
  },

  warning_title:{
    height:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },

  warning_body:{
    height:200,
    justifyContent: "center",
    alignItems: "center"
  },

  warning_button:{
    backgroundColor: "white",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems: "center",
    justifyContent: "center"
  }
});

//--IMAGE GOOD OR NOT--//
/*export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setshowWarning] = useState(false);

  const onPressHandler = () =>{
    if (name.length > 0){
      setSubmitted(!submitted)
    }
    else{
     setshowWarning(true)
    }
  }

  return (
    <ImageBackground
    style={styles.body}
    source= {{uri:"https://i.pinimg.com/originals/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg"}}>
      <Header></Header>
     <Modal
     transparent
        visible={showWarning}
        onRequestClose={() => setshowWarning(false)}
        animationType='slide'>
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text style={styles.text}>WARNING!</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>A name should be entered.</Text>
              </View>
              <Pressable onPress={() => setshowWarning (false)} style={styles.warning_button}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.text}>
          Please write down your name:
        </Text>
        <TextInput style={styles.input}
        placeholder='e.g John'
        onChangeText={(value) => setName(value)}></TextInput>
        {/*<Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, bottom: 50, left: 50, right: 50}}
        style={({pressed}) =>[{backgroundColor: pressed? "#ff00ff" : "#00ff00"}]}>
          <Text>{submitted ? "Clear" : "Submit"}</Text>
        </Pressable> 
        <CustomButtom onPressFunction={onPressHandler} title={submitted ? "Clear" : "Submit"} color={"#00ff00"}></CustomButtom>
        <CustomButtom onPressFunction={onPressHandler} title={"Test"} color={"#00ff"} style={{margin:10}}></CustomButtom>
        {submitted ? 
        <View style={styles.body}>
          <Text style={styles.text}>You are registered as {name} </Text> 
          <Image
          style={styles.image}
          resizeMode='stretch'
          source={require("../my-project/assets/done.png")}>
          </Image>
          </View>
          :
          <Image
          style={styles.image}
          resizeMode='stretch'
          source={{uri:"https://www.seekpng.com/png/full/227-2279377_jpg-free-library-png-image-related-wallpapers-smiley.png"}}>
          </Image>}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems: "center"
  },

  text:{
    color: "#000000",
    fontSize: 30,
    fontStyle: "italic",
    margin:20
  },

  input:{
    width:200,
    borderWidth:1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
  },

  button:{
    width: 150,
    height: 50,
    backgroundColor:"#00ff00",
    alignItems: "center",
    justifyContent: 'center'
  },

  centered_view:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },

  warning_modal:{
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth:1,
    borderColor:"#000",
    borderRadius:20
  },

  warning_title:{
    height:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },

  warning_body:{
    height:200,
    justifyContent: "center",
    alignItems: "center"
  },

  warning_button:{
    backgroundColor: "green",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    alignItems: "center",
    justifyContent: "center"
  },

  image:{
    width:100,
    height:100,
    margin:10
  }
})
*/
//--navigator--// 
/*function ScreenA({navigation}) {

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


function ScreenB({navigation}){

  const onPressHandler = () =>{
    //navigation.navigate("Screen_A");
    navigation.goBack()
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
      onPress={onPressHandler}
      style={({pressed})=>({backgroundColor: pressed? "#ddd" : "#0f0"})}>
        <Text>Go to Screen A</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} options={{header: ()=> null}}/>
        <Stack.Screen name="Screen_B" component={ScreenB}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
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
})*/

import Login from './Login';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator
        intialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown:false,
            }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown:false,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
