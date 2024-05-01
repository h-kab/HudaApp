import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView, Platform, Alert, Animated } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { loginUser } from '../rec/api/api';
import ReactNativeBiometrics from 'react-native-biometrics';
import ScreenNames from '../../route/screenNames';
import Images from '../assets/Images/images';
import HudaAppContext from '../../store/hudaAppContext';
import { StatusBar } from 'react-native';

const Register = (props) => {
    const { setOpen_c } = useContext(HudaAppContext);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [bgColor, setBgColor] = useState('black');
    const [shakeAnimation] = useState(new Animated.Value(0));
    const [isIncorrect, setIsIncorrect] = useState(false);

    useEffect(() => {
        if (isIncorrect) {

            Animated.sequence([
                Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
                Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
            ]).start();
        }
    }, [isIncorrect, shakeAnimation]);

    const navigateToLogin = async () => {
        loginUser(email, password).then((res) => {
            if (res?.message === "welcome :)") {
                props.navigation.navigate('Login', {
                    email: email,
                });
            } else {
                setIsIncorrect(true);
            }
        });
    };

    const navigateTosignUp = () => {
        props.navigation.navigate(ScreenNames.SignUp)
    };

    const toggleBGColor = () => {
        const bg = bgColor === 'white' ? 'black' : 'white';
        setBgColor(bg);
    };


    // const onBioPress = async () => {
    //     const rnBiometrics = new ReactNativeBiometrics();

    //     rnBiometrics.simplePrompt({
    //         promptMessage: 'fingerPrint'
    //     }).then(res => {
    //         if (res?.success) {
    //             navigateToLogin();
    //         }
    //     });
    // };
    // useEffect(() => {
    //     onBioPress();
    //   }, []);


    const handleEmailChange = (text) => {
        setIsIncorrect(false);
        setEmail(text);
    };


    const handlePasswordChange = (text) => {
        setIsIncorrect(false);
        setPassword(text);
    };

    return (
        <ScrollView>
            <View style={[styles.safeA(bgColor)]}>
                <StatusBar barStyle={'default'} />
                <TouchableOpacity style={styles.themebtn} onPress={toggleBGColor}>
                    {bgColor == 'white' ?
                        <Image source={Images.moon()} />
                        :
                        <Image source={Images.sun4()} />}
                </TouchableOpacity>
                <View>
                    {bgColor == 'white' ?
                        <Image source={Images.nikeD()} style={styles.nike} />
                        :
                        <Image source={Images.nike()} style={styles.nike} />}
                </View>
                <Text style={[styles.txt, { color: bgColor === 'white' ? 'black' : 'white' }]}> Login Account </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 11 }}>
                    <Image source={Images.userN()} />
                    <TextInput
                        style={[styles.borderS, { color: bgColor === 'white' ? 'black' : 'white', borderColor: bgColor === 'white' ? 'black' : 'white' }]}
                        placeholder='User Name \ Email'
                        autoCapitalize='none'
                        placeholderTextColor={bgColor === 'white' ? 'black' : 'white'}
                        maxLength={30}
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }} >
                    <Image source={Images.lock()} />
                    <TextInput style={[styles.borderS, { color: bgColor === 'white' ? 'black' : 'white', borderColor: bgColor === 'white' ? 'black' : 'white' }]}
                        placeholder='Password'
                        secureTextEntry={true}
                        placeholderTextColor={bgColor === 'white' ? 'black' : 'white'}
                        maxLength={10}
                        value={password}
                        onChangeText={handlePasswordChange}
                    />
                </View>
                <View >
                    <TouchableOpacity style={[styles.loginB, isIncorrect && styles.incorrectButton]} onPress={navigateToLogin}>
                        <Animated.Text style={[styles.buttonText, isIncorrect && styles.incorrectButtonText, { transform: [{ translateX: shakeAnimation }] }]}>
                            Login
                        </Animated.Text>
                    </TouchableOpacity>
                    <Text style={{ margin: 20, color: bgColor === 'white' ? 'black' : 'white' }}> Don't have an account?</Text>
                    <TouchableOpacity style={styles.signupB} onPress={navigateTosignUp}>
                        <Text style={{ marginLeft: 15, alignItems: "center", alignSelf: "center", alignContent: "center", fontSize: 15, color: "black" }}>Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Register;

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
        paddingHorizontal: 0,
        margin: 30,
        fontWeight: '500',
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
    signupB: {
        height: 30,
        width: 90,
        flexDirection: 'row',
        color: 'blue',
        paddingHorizontal: 0,
        margin: 1,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'white',
        backgroundColor: 'white',
        marginBottom: 150,
        borderRadius: 10,
        borderWidth: 1,
    },
    loginB: {
        height: 30,
        width: 90,
        paddingHorizontal: 66,
        margin: 20,
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 18,
        paddingHorizontal: 25,
        margin: 30,
        marginTop: 25,
        backgroundColor: 'white',
        borderColor: "black",
        borderRadius: 8,
        borderWidth: 1,
    },
    themebtn: {
        alignSelf: 'flex-end',
        fontSize: 18,
        marginTop: 1,
        padding: 10
    },
    nike: {
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    safeA: (bgColor) => ({
        flex: 1,
        backgroundColor: bgColor,
    }),

    bc: (borderC) => ({
        borderColor: borderC,
    }),

    incorrectButton: {
        backgroundColor: 'white',
    },
    incorrectButtonText: {
        color: 'red',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 4
    },
});



