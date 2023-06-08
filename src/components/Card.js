import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
    return (
        <View style={[styles.card ]}>
            {/* <View style={styles.cardTop}>
                <View style={[styles.greenRct , { backgroundColor: props.bgc || 'green'}]}></View>
                <View >
                    <Text>{'name:'  + props.name}</Text>
                    <Text>{'bd: ' + props.bd}</Text>
                </View>
            </View>
            <Text style={styles.uiText}>my first ui </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        width: '70%',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    cardTop: {
        flexDirection: 'row',
        // borderWidth:1 , 
    },
    greenRct: {
        height: 700,
        width: 10,
        backgroundColor: 'green',
        marginRight: 10,
        borderRadius: 30,
    },
    uiText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
        // borderWidth:1 , 
        // alignSelf:'center'
        textAlign: 'center'
    }

})

export default Card;