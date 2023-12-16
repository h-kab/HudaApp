
// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// const App = () => {
//     return (
//         <View style={{ flex: 1, }}>
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

//                 <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign Up</Text>
//                 <View style={{ marginBottom: 20 }}>
//                     <TextInput style={{ borderWidth: 1, padding: 10 }} placeholder="Full Name" />
//                 </View>
//                 <View style={{ marginBottom: 20 }}>
//                     <TextInput style={{ borderWidth: 1, padding: 10 }} placeholder="Phone Number" />
//                 </View>
//                 <View style={{ marginBottom: 20 }}>
//                     <TextInput style={{ borderWidth: 1, padding: 10 }} placeholder="Email" />
//                 </View>
//                 <View style={{ marginBottom: 20 }}>
//                     <TextInput style={{ borderWidth: 1, padding: 10, borderRadius:10 }} placeholder="Password" secureTextEntry={true} />
//                 </View>
//                 <TouchableOpacity style={{ backgroundColor: `#0000cd`, padding: 10, borderRadius: 5 }}>
//                     <Text style={{ color: '#fff', textAlign: 'center' }}>Register</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };
// const styles = StyleSheet.create({

// })
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Images from '../assets/Images/images'

const signUp = () => {
    const [bgColor, setBgColor] = useState('black')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const bsh = () => {
        toggleBGColor()
    }
    const toggleBGColor = () => {

        const bg = bgColor === 'white' ? 'black' : 'white'
        setBgColor(bg);
    }

     const textColor = bgColor === 'white' ? 'black' : 'white'

     const isIOS = () => Platform.OS === 'ios';

  return (

    <View>
                <Text style={[styles.txt, { color: textColor }]}> Sign Up </Text>
                <Text style={[styles.txt, { color: textColor }]}> Become a NIKE member! </Text>


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
    </View>
  )
}

export default signUp
const styles=StyleSheet.create({


   





    safeA: (bgColor) => ({
        flex: 1,
        backgroundColor: bgColor,

    }),
    bc: (borderC) => ({
        borderColor: borderC,
    }),

 
})