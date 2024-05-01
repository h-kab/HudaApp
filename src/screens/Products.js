

import React, { useContext, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { productData } from '../rec/dat';
import Images from '../assets/Images/images';
import ScreenNames from '../../route/screenNames';
import { useNavigation } from '@react-navigation/native';
import Category from '../components/Category';
import HudaAppContext from '../../store/hudaAppContext';

const Categories = ['All', "Men's", "Women's", "Kid's"]; 
const numColumns = 2;

const Products = () => {
  const context = useContext(HudaAppContext);
  const navigation = useNavigation();

  const [SelectedCategory, SetSelectedCategory] = useState('All'); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const navigateToProductDetails = (product) => {
    navigation.navigate('ProductDetails', { product: product });
  };

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  const ProductCard = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToProductDetails(item)}>
        <View style={styles.card}>
          <Image style={styles.img} source={{ uri: item.img }} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.priceText}>{item.Category}</Text>
          <Text style={styles.text}>₪{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => <ProductCard item={item} />;

  const filteredProducts = productData.filter(
    (item) =>
      (SelectedCategory === 'All' || item.Category === SelectedCategory) && 
      (searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <TouchableOpacity style={styles.themebtn} onPress={() => navigateToCart()}>
          <Image source={Images.Bcart()} />
          <View style={styles.gg}>
            <Text style={styles.gt}> {context.Cart.length}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.Sbar}>
        <Image source={Images.search()} style={styles.search} />
        <TextInput
          placeholder="Search"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
          style={styles.clearB}
        />
      </View>

      <View>
        <FlatList
          data={Categories}
          renderItem={({ item }) => (
            <Category
              item={item}
              SelectedCategory={SelectedCategory}
              SetSelectedCategory={SetSelectedCategory}
            />
          )}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        numColumns={numColumns}
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
 
    card: {
    // borderColor: "black",
    width: 200,
    aspectRatio: 1,
    padding: 5,
    marginTop: 5,
    backgroundColor: "whitex",
    marginLeft: 10,
    marginBottom: 15,

  },
  Sbar: {
    marginHorizontal: 20,
    marginLeft: 20,
    marginTop: 8,
    backgroundColor: `#d3d3d3`,
    borderRadius: 8,
    flexDirection: "row",
  },
  clearB: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 40,
    width: 300,

  },
  Sbartext: {
    marginVertical: 10,
    marginTop: 10,
    marginLeft: 30,
  },
  text: {
    color:"black",
    marginTop: -2,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "500",
  },
  Ctext: {
    marginTop: 5,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "500"
  },
  priceText: {
    color: "#5c5c5c",// dark gray 
    marginTop: 5,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "400",

  },

  img: {
    width: '80%',
    aspectRatio: 1,
    marginTop: 10,
    borderRadius: 8,

  },
  themebtn: {
    alignSelf: 'flex-end',
    fontSize: 18,
    marginTop: 1,
    // borderWidth:1 , 
    padding: 10
  },
  search: {
    height: 25,
    width: 30,
    marginTop: 7,
    marginLeft: 5
  },
  gg:{
    borderRadius: 10, 
    backgroundColor: 'red', 
    height: 15, width: 15, 
    marginLeft: 19,
     marginTop: -35,
  },
  gt:{
    color: 'white', 
    marginLeft: 2,
     marginTop: 1, 
     fontSize: 10,
  },
});