import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'

const C7 = () => {
  const [num, setNum] = useState(0)
  return (
    <View>
      {/* <View style={[styles.Card]}>

      </View> */}
    </View>

  )
}

export default C7

const styles = StyleSheet.create({

  Card: {
    borderWidth: 1,
    width: '70%',
    height: '70%',
    padding: 10,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',

  },
  Top: {
    flexDirection: 'row',
  },

  b1: {

    borderWidth: 3,
    padding: 8,
    backgroundColor: 'lightblue'

  },

  b2: {

    borderWidth: 3,
    padding: 8,
    backgroundColor: 'lightblue'
  },

  buttonC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
  },
})