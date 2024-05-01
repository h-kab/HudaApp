import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import MainNavigation from "./route/nav";
import HudaAppProvider from './store/hudaAppProvider';
import { useEffect, useState } from "react";
import { getAllUsers } from './src/rec/api/api';
import { productData } from './src/rec/dat';
import ProdctDetails from './src/screens/ProductDetails';
import Category from './src/components/Category';
import ShoppingCart from './src/screens/ShoppingCart';


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const [user, setUsers] = useState([]);
  const getAllUsersFromApi = () => {
    getAllUsers().then(res => {
      console.log("all users:", res);
      setUsers(res);
    });
  };
  useEffect(() => {
    getAllUsersFromApi();
  }, []);







  return (
    <View style={styles.container} >

{/* <ShoppingCart/> */}
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
