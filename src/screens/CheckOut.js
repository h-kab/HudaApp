//this page isnt ready :D
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import CreditCard from 'react-native-credit-card';
import React, { useState } from 'react'
import Images from '../assets/Images/images';

const CheckOut = () => {
    const [type, setType] = useState('');
    const [focused, setFocused] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    return (
        <View>
<Text>check out</Text>

<Image  style={styles.img} source={Images.cFront}/>
<TextInput
        style={styles.input}
        placeholder="Card Number"
        onChangeText={(text) => setNumber(text)}
        onFocus={() => setFocused('number')}
        value={number}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Card Holder Name"
        onChangeText={(text) => setName(text)}
        onFocus={() => setFocused('name')}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        onChangeText={(text) => setExpiry(text)}
        onFocus={() => setFocused('expiry')}
        value={expiry}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CVC"
        onChangeText={(text) => setCvc(text)}
        onFocus={() => setFocused('cvc')}
        value={cvc}
        keyboardType="numeric"
        secureTextEntry
      />
        </View>
    )
}

export default CheckOut

const styles = StyleSheet.create({
    img:{
        height:330,
        width:350
    }
})