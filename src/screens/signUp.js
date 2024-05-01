import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Button, } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import ScreenNames from '../../route/screenNames'

import Images from '../assets/Images/images'

const DWdata = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'prefer not to respond', value: '3' },

];


const SignUp = (props) => {
    const [bgColor, setBgColor] = useState('black')
    const [email, setEmail] = useState(null)
    const [mobileNum, setMobileNum] = useState(null)

    const [password, setPassword] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setlastName] = useState(null)
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const navigateToLoginFromSignUp = async () => {
        console.log("firstname", firstName, "start");

        props.navigation.navigate('HiNewUser', {
            firstName: firstName,
        });
    };



    const bsh = () => {
        toggleBGColor()
    }
    const toggleBGColor = () => {

        const bg = bgColor === 'white' ? 'black' : 'white'
        setBgColor(bg);
    }

    const textColor = bgColor === 'white' ? 'black' : 'white'

    const isIOS = () => Platform.OS === 'ios';
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                </Text>
            );
        }
        return null;
    };

    return (

        <View style={[styles.con, , { color: textColor }]}>
            <Text style={[styles.txt, { color: textColor }]}> Sign Up </Text>
            <Text style={[styles.txt2, { color: textColor }]}> Become a NIKE member! </Text>


            <View style={{ alignItems: 'center', marginLeft: 5 }}>
                <TextInput
                    style={[styles.borderS, { color: textColor, borderColor: textColor }]}
                    placeholder='Mobile Number / Email'
                    placeholderTextColor={textColor}
                    maxLength={30}
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput style={[styles.borderS, { color: textColor, borderColor: textColor }]}
                    placeholder='First Name'
                    placeholderTextColor={textColor}
                    maxLength={15}
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput style={[styles.borderS, { color: textColor, borderColor: textColor }]}
                    placeholder='Last Name'
                    placeholderTextColor={textColor}
                    maxLength={15}
                    value={lastName}
                    onChangeText={setlastName}
                />

                <TextInput style={[styles.borderS, { color: textColor, borderColor: textColor }]}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor={textColor}
                    maxLength={10}
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.container}>
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue', textColor: "black" }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedItemContainerStyle={{ color: 'black', }}
                        itemTextStyle={{ color: "black" }}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={DWdata}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Gender' : '...'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}

                    />

                </View>

                <TouchableOpacity style={styles.SignUpB} onPress={navigateToLoginFromSignUp} >
                    <Text style={styles.sb}> SignUp </Text>
                </TouchableOpacity>
                <View>

                </View>
            </View>
        </View>
    )
}

export default SignUp
const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: "black",
    },
    txt: {
        fontSize: 35,
        paddingHorizontal: 0,
        fontWeight: 500,
        fontSize: 50,
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 50


    },
    txt2: {
        fontFamily: "KohinoorBangla-Semibold",
        fontSize: 35,
        paddingHorizontal: 0,
        fontWeight: 400,
        fontSize: 30,
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 20,

    },
    borderS: {

        borderBottomWidth: 3,
        paddingHorizontal: 0,
        margin: 30,
        marginBottom: 30,
        paddingBottom: 5,
        flexDirection: 'row',
        width: "80%",

    },
    datepick: {
        flex: 1,
        justifyContent: 'center',
    },
    loginB: {
        paddingHorizontal: 66,
        margin: 20,
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 18,
        paddingHorizontal: 25,
        margin: 30,
        marginTop: 25,
        backgroundColor: 'white',


    },

    container: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginBottom: 25,
    },
    dropdown: {
        height: 30,
        borderColor: 'red',
        borderRadius: 8,
        paddingHorizontal: 8,
        width: 280,

    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        left: 25,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        marginBottom: 30,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'black',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
    },
    iconStyle: {
        width: 10,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    SignUpB: {
        height: 40,
        width: 100,
        flexDirection: 'row',
        color: 'blue',
        paddingHorizontal: 0,
        margin: 1,
        fontWeight: 600,
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'white',
        marginBottom: 150,
        borderRadius: 10,


    },
    sb: {
        marginLeft: 15,
        alignItems: "center",
        lignSelf: "center",
        alignContent: "center",
        fontSize: 15,
        marginLeft: 20,
        color: "black",
    },


    safeA: (bgColor) => ({
        flex: 1,
        backgroundColor: bgColor,

    }),
    bc: (borderC) => ({
        borderColor: borderC,
    }),


})