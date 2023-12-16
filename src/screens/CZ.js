import { StyleSheet, Text, View, Image, ScrollView, Alert, Button } from 'react-native'
import React from 'react'
import Images from '../assets/Images/images'

const CZ = () => {
    const showAlert = () => {
        Alert.alert(
            'احسنتم!',
            ' لقد اتممتم جميع المهمات بنجاح💪',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    };
    return (
        <ScrollView>
            <View style={styles.View}>
                <Text style={styles.title}>CODE ZONE</Text>
                <Text style={styles.text2}> "مرحبا يا اصدقاء! هل تحبون البرمجه؟</Text>
                <Text style={styles.text2} > لدي بعض المهام لكم!"</Text>
                <View style={{ flexDirection: "row-reverse" , alignItems:'center' }}>
                    < Image source={Images.robot()} style={styles.robot} />
                    
                    <Text style={styles.taskBubble} >اسم الكليه غير مرئي!اجعلوه مرئياً. </Text>
                </View>
                <Text style={styles.taskBubble} >غيروا لون الشاشه الى اللون الازرق.</Text>
                <Text style={styles.taskBubble} >غيرو لون النص الذي تقرئوه الان الى اللون الازرق.</Text>
                <Text style={styles.taskBubble} >لونو خلفيه بند المهمه التي تنهيها باللون الاخضر.</Text>
                <Text style={styles.taskBubble} >لونو خلفيه بند المهمه التي تنهيها باللون الاخضر.</Text>
                <Text style={styles.taskBubble} >لونوا لون الاطار الى اللون الاسود.</Text>

                <View style={styles.Button}>
                    <Button title="انتهاء" onPress={showAlert} />
                </View>

            </View>

        </ScrollView>
    )
}

export default CZ

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor:'#ffff'
    },
    title: {
        fontSize: 40,
        marginLeft: 60,
        marginTop: 20,
        fontFamily: "Arial Rounded MT Bold",
        color: "#ffff",
    },
    img: {
        height: "50%",
        width: "50%",
    },
    robot: {

        height: 170,
        width: 150,
        marginTop: 25,
        alignSelf: 'flex-end',
        marginRight: 50,



    },
    text2: {
        fontSize: 20,
        marginRight: 60,
        fontFamily: "Arial Rounded MT Bold",
        color: "black",
        textAlign: 'right'
    },


    taskBubble: {
        fontSize: 15,
        borderWidth: 2,
        height: 110,
        width: 130,
        marginLeft: 60,
        borderColor: "white",
        marginTop: 10,
        marginRight: 15,
        padding: 16,
        borderRadius: 40,
        overflow: 'hidden',
        textAlign: 'right',

    },
   

    Button: {
        backgroundColor: "lightblue",
        marginLeft: 140,
        height: 50,
        width: 110,
        marginTop: 25,
        color: "black",
        padding: 5,
        borderRadius: 40,
        overflow: 'hidden'


    }

})