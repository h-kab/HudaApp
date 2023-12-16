import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView, Platform, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import HudaAppContext from '../../store/hudaAppContext'
import ScreenNames from '../../route/screenNames'
import { StatusBar } from 'react-native'
import Images from '../assets/Images/images'
import { loginUser } from '../rec/api/api'

const Register = (props) => {
    const { scree1_c, setOpen_c, scree2_c } = useContext(HudaAppContext)

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [bgColor, setBgColor] = useState('black')

    const navigateTosignUp = () => {
        props.navigation.navigate(ScreenNames.signUp)
    }
    const navigateToCZ=() => {
        props.navigation.navigate(ScreenNames.CZ)
    }
   
    const navigateToLogin = async () => {
        console.log("email", email, "start");
        loginUser(email, password).then((res) => {
            console.log("res: " , res);
            if(res?.message == "welcome :)") {
                props.navigation.navigate('Login')
            }else {
                // Alert.alert(res?.message)
            }
            console.log("res ->", res);
        })
        // props.navigation.navigate('Login')

    }

    const bsh = () => {
        toggleBGColor()
    }

    // console.log(email);

    //  theme changing :
    // const toggleBGColor = () => {

    //     const bg = bgColor === 'white' ? 'black' : 'white'
    //     setBgColor(bg);
    // }

    // const textColor = bgColor === 'white' ? 'black' : 'white'





    const toggleBGColor = () => {

        const bg = bgColor === 'white' ? 'black' : 'white'
        setBgColor(bg);
    }

    const textColor = bgColor === 'white' ? 'black' : 'white'

    const imageUri = 'https://i.pinimg.com/564x/63/67/75/63677538a34f51de14830aa774a40091.jpg'


    const isIOS = () => Platform.OS === 'ios';


    return (

        <ScrollView>

            <View style={[styles.safeA(bgColor)]}>

            <StatusBar barStyle={'default'} />     

           {/* {bgColor == 'white' ?
                       <StatusBar barStyle={'dark-content'} />     
                            :
                            <StatusBar barStyle={'light-content'} />     
    } */}
               
                {/* <View >
                    <TouchableOpacity onPress={toggleBGColor}>
                        < Image source={Images.theme()} style={styles.themwicon} />

                    </TouchableOpacity>
                </View> */}

                <TouchableOpacity style={styles.themebtn} onPress={toggleBGColor}>
                    {
                        bgColor == 'white' ?
                            < Image source={Images.moon()} />
                            :
                            < Image source={Images.sun4()} />}
                </TouchableOpacity>

                <View >
                    {/* < Image source={{ uri: imageUri }} style={styles.png} /> */}
                    {
                        bgColor == 'white' ?
                            < Image source={Images.nikeD()} style={styles.nike} />
                            :
                            < Image source={Images.nike()} style={styles.nike} />}

                </View>

                <Text style={[styles.txt, { color: textColor }]}> Login Account </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 11 }}>
                    < Image source={Images.userN()} />
                    <TextInput
                        style={[styles.borderS, { color: textColor, borderColor: textColor }]}
                        placeholder='Email'
                        placeholderTextColor={textColor}
                        maxLength={30}
                        value={email}
                        onChangeText={setEmail}
                     />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }} >
                    < Image source={Images.lock()} />
                    <TextInput style={[styles.borderS, { color: textColor, borderColor: textColor }]}
                        placeholder='Password'
                        secureTextEntry={true}
                        placeholderTextColor={textColor}
                        maxLength={10}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={{}}>
                    {/* <TouchableOpacity style={styles.themebtn} onPress={toggleBGColor} >
                            <Text> Theme </Text>
                        </TouchableOpacity> */}

                    <TouchableOpacity style={styles.loginB} onPress={navigateToLogin} >
                        <Text> Login </Text>
                    </TouchableOpacity>


                    <Text style={{ margin: 20, color: textColor, }}> Dont have an account?</Text>




                    <TouchableOpacity style={styles.signupB} onPress={navigateTosignUp} >
                        <Text> signUp </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupB}  onPress={navigateToCZ}>
                        <Text>CZ</Text>
                    </TouchableOpacity>


                </View>



            </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    png: {
        marginLeft: 50,
        flexDirection: 'row',
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 25,


    },
    txt: {

        fontSize: 35,
        paddingHorizontal: 0,
        margin: 30,
        fontWeight: 500,

    },
    borderS: {

        borderBottomWidth: 3,
        paddingHorizontal: 0,
        margin: 30,
        marginBottom: 30,
        paddingBottom: 5,
        flexDirection: 'row',
        //  backgroundColor: '#4545',
        width: "80%",

    },
    signupB: {
        flexDirection: 'row',
        color: 'blue',
        paddingHorizontal: 0,
        margin: 1,
        fontWeight: 600,
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'white',
        marginBottom: 25

    },
    loginB: {
        paddingHorizontal: 66,
        margin: 20,
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 18,
        paddingHorizontal: 25,
        margin: 30,
        marginTop: 1,
        backgroundColor: 'white',


    },

    themebtn: {
        alignSelf: 'flex-end',
        fontSize: 18,
        marginTop: 1,
        // borderWidth:1 , 
        padding: 10
    },


    themwicon: {
        height: 50,
        width: 50,
        marginTop: 20,
        margin: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 25,
        margin: 8,
    },
    // lockIcon: {
    //     height: 20,
    //     width: 20,
    //     marginTop: 20,
    //     margin: 10,
    //     paddingHorizontal: 25,
    //     margin: 8,
    //     paddingLeft: 10,
    // },
    nike: {
        // height: '60%',
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 20,

    },
    // nikeD: {
    //     hight: '60%',
    //     width: '60%',
    //     alignSelf: 'center',
    //     alignItems: 'center',
    //     marginLeft: 20,

    // },

    imageStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        margin: 2,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        marginBottom: 8,
        marginTop: 8,
        alignItems: 'center',
    },















    safeA: (bgColor) => ({
        flex: 1,
        backgroundColor: bgColor,

    }),
    bc: (borderC) => ({
        borderColor: borderC,
    }),



})
