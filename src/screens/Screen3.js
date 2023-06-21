import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import HudaAppContext from '../../store/hudaAppContext'

const Screen3 = () => {
    const {scree1_c , setScreen1_c , scree2_c} = useContext(HudaAppContext)

    return (
        <View>
            <Text>Screen3</Text>

            <Text style={styles.txt}>{`scree1_c: ${scree1_c}`}</Text>
            <Text style={styles.txt}>{`scree2_c: ${scree2_c}`}</Text>
        </View>
    )
}

export default Screen3

const styles = StyleSheet.create({
    txt:{
        fontSize:30
    }
})