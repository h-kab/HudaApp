import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ContactItem = (props) => {

   const [bgColor , setBgColor ] = useState('blue')

    const onCardPress = () => {
       setBgColor(bgColor === 'red' ? 'blue' : 'red')
    }

    return (
        <TouchableOpacity style={[styles.vc]} onPress={onCardPress} >
            {/* <View style={[styles.Row]} >
                <View style={[styles.BluePic, { backgroundColor: bgColor }]}></View>
                <View >
                    <Text>{'name:' + props.name}</Text>
                    <Text>{'SMS:' + props.SMS}</Text>
                </View>
            </View> */}

        </TouchableOpacity>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    vc: {
        borderWidth: 1,
        width: '100%',
        padding: 20,
        borderRadius: 0,
        marginTop: 20,
        alignSelf: 'center',

    },
    BluePic: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        marginRight: 10,
        borderRadius: 50,
    },
    Row: {
        flexDirection: 'row'
    },



})