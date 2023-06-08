import React from 'react';
import { StyleSheet, View } from "react-native";
import MainNavigation from "./route/nav";



const App = () => {

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
  },

})

export default App;
