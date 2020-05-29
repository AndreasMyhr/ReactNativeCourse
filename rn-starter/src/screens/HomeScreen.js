import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
 
  return (
  <View>
  <Text style={styles.text}>HelloThere</Text>
  <Text style={styles.text}>This is my first project</Text>
  <Button
  onPress={()=>navigation.navigate('Components')} 
  title="goToComponentsDemo"></Button>

  <Button
    title="Go to list Demo" onPress={()=>navigation.navigate('List')}>
  </Button>

  <TouchableOpacity onPress={()=>navigation.navigate('List')}>
    <Text>
      Go to list demodsfg
    </Text>
    <Text>Go to list demo</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>navigation.navigate('Image')}>
    <Text>
      Go to image screen
    </Text>
   
  </TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate('Counter')}>
    <Text>
      Go to counter
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>navigation.navigate('Color')}>
    <Text>
      Go to Color
    </Text>
  </TouchableOpacity>

  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

