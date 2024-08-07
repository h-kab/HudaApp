import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';





const Login = (props) => {
    const route = useRoute();
    console.log("Login Success");

    const navigateToProducts = () => {
        props.navigation.navigate('Products')
        console.log("start nav");
    }
    return (

        <View style={styles.vs} >


            <Text style={styles.smth}> Hi {route.params.email} ,Welcome Back! </Text>
            <TouchableOpacity style={styles.btn} onPress={navigateToProducts} >
                <Text style={styles.tb}>  Go To Shop </Text>
            </TouchableOpacity>


        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    smth: {
        fontSize: 40,
        color: 'white',
        marginLeft: 50,
        marginTop: 90,
        fontFamily: 'AvenirNext-Bold',
    },
    vs: {
        flex: 1,

        backgroundColor: 'black',

    },
    backbtn: {
        margin: 30,
        width: '40%',
        height: 50,
        backgroundColor: `#808080`,
        borderRadius: 40,

    },
    btn: {
        marginTop: 300,
        paddingHorizontal: 25,
        margin: 30,
        width: '40%',
        height: 50,
        backgroundColor: `#808080`,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    tb: {

        fontSize: 18,
        color: 'white',

    },

})


