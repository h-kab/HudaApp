import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({ item, SelectedCategory, SetSelectedCategory }) => {
    return (
        <View>



            <TouchableOpacity style={[styles.categoryCon, SelectedCategory === item && {
                 backgroundColor: "black"
            }]} onPress={() => SetSelectedCategory(item)}>

                <Text style={styles.categoryTxt} >

                    {item}
                </Text>
            </TouchableOpacity>

        </View>








    )
}

export default Category

const styles = StyleSheet.create({
    categoryCon: {
        // backgroundColor: "#c1dbf5",
        backgroundColor: "#899db0",
        height: 50,
        width: 130,
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    categoryTxt: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        padding: 15,
        color:"white"
    }

})