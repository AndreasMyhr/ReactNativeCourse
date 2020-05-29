import React from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
const ListScreen=() =>{
    const friends=[
        {name: 'friend #1', age: 23},
        {name: 'friend #2', age: 23},
        {name: 'friend #3', age: 23},
        {name: 'friend #4', age: 23},
        {name: 'friend #5', age: 23},
        {name: 'friend #6', age: 23},
        {name: 'friend #7', age: 23}

        /* {name: 'friend #1',key: '1'},
 {name: 'friend #2',key: '2'},
 {name: 'friend #3',key: '3'},
 {name: 'friend #4',key: '4'},
 {name: 'friend #5',key: '5'},
 {name: 'friend #6',key: '6'}*/ //En måte å legge til keys opå 

    ]



    return (
         <FlatList
         showsHorizontalScrollIndicator={false}
         keyExtractor={(friends)=>friends.name} // Andre måten å legge til koden
    data={friends} renderItem={({item})=>{return <Text style={styles.textStyle}>{item.name} -  Age:  {item.age}</Text>;
         }}
           />
     );
};

const styles=StyleSheet.create({
    textStyle:{
        marginVertical:50
    
    }
});
export default ListScreen;