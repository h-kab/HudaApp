import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Screen1 = (props) => {

    const navigateToScreen2 = () => {
        props.navigation.navigate('screen2')
    }

    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={navigateToScreen2} >
                <Text> navigate to Screen2</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    btn:{
        width:'50%', 
        height:50 , 
        backgroundColor:'red' , 
        alignSelf:'center' , 
        alignItems:'center' , 
        justifyContent:'center'
    }
})