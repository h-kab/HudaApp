
import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, useWindowDimensions, FlatList } from 'react-native';
import HudaAppContext from '../../store/hudaAppContext';
import Images from '../assets/Images/images';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
 const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const { product } = route.params;
  const [isFaved, setIsFaved] = useState(false);
  const context = useContext(HudaAppContext);
  const [quantity, setQuantity] = useState(1);
  const price = product.price;
  const total = price * quantity;

  const handleAddToCart = () => {
    const itemToAdd = {
      name: product.name,
      img: product.img, 
      price: product.price,
      quantity: quantity,
      total: total,
      dis:product.dis,
    };
    context.SetCart([...context.Cart, itemToAdd]);
 
  };

  const toggleFav = () => {
    setIsFaved(!isFaved);
    const message = isFaved ? "removed from favorites" : "added to favorites";
    console.warn(message);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>




                 <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          
        />












        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <TouchableOpacity onPress={toggleFav} style={styles.favIcon}>
            <Image source={isFaved ? Images.redFav() : Images.mtFav()} />
          </TouchableOpacity>
                   <Text style={styles.description}>{product.dis}</Text>
<View style={{flexDirection:"row"}}>
          <Text style={styles.price}>₪{price}</Text>          
          <View style={styles.quantityContainer}>
            
            <TouchableOpacity onPress={decrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          </View>
          <Text style={styles.price}>Total Price : ₪{total}</Text>

          <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
            <Text style={styles.buttonTxt}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  detailsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

    name: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 20,
    color:"black",
  },


  price: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        color:"black",
    
      },


  totaltxt: {
    fontSize: 18,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft:150
  },
  quantityButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    height:30,
    width:30,
    borderColor:"black",
    borderWidth:1
  },
  quantityButtonText: {
    color: 'black',
    fontSize:15,
    fontWeight: 'bold',
    marginTop:-7,
    marginLeft:-1
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  favIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        color: "gray"
      },
});

export default ProductDetails;
