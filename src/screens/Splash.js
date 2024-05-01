import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import ScreenNames from "../../route/screenNames";
 

const SplashScreen = (props) => {




    const func = () => {
        props.navigation.replace(ScreenNames.HomePage)
    }


    React.useEffect(() => {
        setTimeout(() => {
            func()
        }, 1.5 * 1000);
    }, []);


    return (
        <View  >
            <Image source={{ uri: 'https://i.pinimg.com/564x/63/67/75/63677538a34f51de14830aa774a40091.jpg' }} style={styles.image} />
        </View>
    );

};

const styles = StyleSheet.create({
    // cont: {
    //     flex: 1,
    //    backgroundColor:"black"
    // },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
backgroundColor: 'black',
        alignItems: 'center',
    
    },
  

});



export default SplashScreen;