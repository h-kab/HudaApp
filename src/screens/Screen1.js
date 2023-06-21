import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HudaAppContext from '../../store/hudaAppContext'

const Screen1 = (props) => {
    const {scree1_c , setScreen1_c , scree2_c} = useContext(HudaAppContext)
   
    const navigateToScreen2 = () => {
        setScreen1_c(scree1_c +1 )
        props.navigation.navigate('screen2')
    }

    const navigateToScreen3 = () => {
        setScreen1_c(scree1_c +1 )
        props.navigation.navigate('screen3')
    }

    console.log("scree1_c: ", scree1_c);

    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={navigateToScreen2} >
                <Text> navigate to Screen2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={navigateToScreen3} >
                <Text> navigate to Screen3</Text>
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
    }, 
    
})