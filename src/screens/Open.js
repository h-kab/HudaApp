import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, Button, StatusBar } from 'react-native'
import HudaAppContext from '../../store/hudaAppContext'

const Open = (props) => {
    const { Open_c, setOpen_c, scree2_c } = useContext(HudaAppContext)
    const imguri = 'https://i.pinimg.com/564x/89/09/41/890941844ffb3e56fb9456f0caa3b18a.jpg'
    const navigateToregister = () => {
        props.navigation.navigate('register')
    }



    return (
        <View style={styles.c1} >

<StatusBar barStyle={'default'} />     


            <ImageBackground source={{ uri: imguri }}
                style={styles.img}>
                <View style={{ marginTop: 100, }} >

                    <Text style={styles.txt}> Free shipping</Text>
                    <Text style={styles.txt}> members-only products</Text>
                    <Text style={styles.txt} >best of Nike, personalized for you.</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={navigateToregister} >
                    <Text style={styles.tb}>  Join Us! </Text>
                </TouchableOpacity>
            </ImageBackground>


        </View>
    )
}

export default Open

const styles = StyleSheet.create({
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
    txt: {

        fontSize: 40,
        color: 'white',
        fontFamily: 'AvenirNext-Bold',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginLeft: 20,

    },
    tb: {

        fontSize: 18,
        color: 'white',

    },
    c1: {
        flex: 1,
        backgroundColor: 'black',
    },
    titleL: {
        fontSize: 35,
        color: 'white'
    },
    img: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',

    },
})
