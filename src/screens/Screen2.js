import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Screen1 from './Screen1'

const Screen2 = (props) => {

    const goback = ()=> {
        props.navigation.goBack()
    }

    return (
        <View>
            <TouchableOpacity onPress={goback}>
                <Text>Screen1</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Screen2

const styles = StyleSheet.create({})