import React from 'react';
import { StyleSheet, View } from "react-native";
import MainNavigation from "./route/nav";



const App = () => { //function component//

  // const data = [
  //   {
  //     name: 'A',
  //     SMS: '19.34569',

  //   },
  //   {
  //     name: 'B',
  //     SMS: '23.63456789',

  //   },
  //   {
  //     name: 'C',
  //     SMS: '21.10345678',
  //   },
  //   {
  //     name: 'D',
  //     SMS: '28.89876'

  //   },
  //   {
  //     name: 'E',
  //     SMS: '24.8',

  //   },
  //   {
  //     name: 'F',
  //     SMS: '6.7NNHGGEU'

  //   }
  // ]

  // const render = () => {
  //   return data.map(CData => {
  //     return <ContactItem name={CData.name} SMS={CData.SMS} pic={CData.pic} />
  //   })
  // }

  return (
    <View style={styles.container} >
      <MainNavigation />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center' , 
  },

})

export default App; 
