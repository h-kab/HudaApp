import React from 'react';
import { StyleSheet, View } from "react-native";
import MainNavigation from "./route/nav";
import HudaAppProvider from './store/hudaAppProvider';



const App = () => {

  return (
    <View style={styles.container} >
      <HudaAppProvider>
        <MainNavigation />
      </HudaAppProvider>
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
