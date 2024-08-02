
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { productData } from '../rec/dat';
import Products from './Products';
import Images from '../assets/Images/images';
import ScreenNames from '../../route/screenNames';

const CartCard = (props) => {
  const id = props.id
  const name = props.name
  const price = props.price
  const Category = props.Category
  const img = props.img
  const Quantity = props.Quantity
const onDelete=props.onDelete


  const total = price * quantity;



const handleDelete = () => {
  onDelete(id);
};
  const { width } = useWindowDimensions();

  const [quantity, setQuantity] = useState(1);

  // const incrementQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  const navigation = useNavigation();
  

  const navigateToProductDetails = (product) => {
    navigation.navigate('ProductDetails',{ product:product});
  };

  return (

    <View>

      <View style={styles.scroolW}>
        <ScrollView   horizontal={true}  pagingEnable>
   
   

        <TouchableOpacity>
          <View style={styles.container}>
            <Image source={{ uri: img }} style={styles.image} />
            <View style={styles.content}>

              <Text style={styles.name}>{name}</Text>
              <Text style={styles.price}>₪{price}</Text>
              <TouchableOpacity onPress={handleDelete}>
  <Image style={styles.garbage}  source={Images.garbage()} />
</ TouchableOpacity> 
            </View>
          </View>
        </TouchableOpacity>
        

    

       
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignproducts: 'center',
    marginBottom: 20,
   
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    color: "black",
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: 'gray',
  },
  quantityButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroolW:{
    flexDirection:"row"
    
  },
  garbage:{
    marginTop:5,
    height:20,
    width:20,


  }
});

export default CartCard;
