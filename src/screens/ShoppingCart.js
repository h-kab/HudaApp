
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HudaAppContext from '../../store/hudaAppContext';
import CartCard from './CartCard';
import { useNavigation } from '@react-navigation/native';
import Images from '../assets/Images/images';

const ShoppingCart = (props) => {
  const id = props.id
  const [products, setProducts] = useState([])
  const { Cart, SetCart } = useContext(HudaAppContext);

  const context = useContext(HudaAppContext);
  useEffect(() => {
    setProducts(Cart);
  }, [Cart]);
  const toCheckOut= () => {
    props.navigation.navigate('CheckOut')
}
  const handleDelete = (index) => {
    console.log('Product index found:', index);
    if (index > -1) {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      console.log('Updated products after deletion:', updatedProducts);
      setProducts(updatedProducts);
      context.SetCart(updatedProducts); 
    } else {
      console.warn('Product not found in the list:', index);
    }
  };

  const renderCart = () => {

    return context.Cart.map((product,index) => {

      return (
        <CartCard
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          dis={product.dis}
          Category={product.Category}
          Quantity={product.Quantity}
          total={product.total}
          onDelete={()=>handleDelete(index)}
        />


      )
    })
  }

  return (

    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.title}>My Cart</Text>


        {renderCart()}
        <View>

          <View>
            <TouchableOpacity style={styles.CheckoutB} onPress={toCheckOut}>
              <Text style={styles.buttonTxt}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>


  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 150,

  },
  pricenshipping: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 10
  },
  txt: {
    color: "gray",
    fontSize: 18
  },
  txt2: {
    color: "gray",
    fontSize: 18,
    marginLeft: 15,
    marginTop: 15,
  },
  GrandTotalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  txt3: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 25,
    marginTop: 10,
    marginRight: 10
  },
  CheckoutB: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 100,
  },
  buttonTxt: {
    color: "white",
    fontSize: 18,
    fontWeight: '500',
  },
});

















