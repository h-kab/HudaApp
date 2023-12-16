import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, } from 'react-native'
import React, { useState } from 'react'
import { productData } from '../rec/dat';
import { Menu } from 'native-base';

// import { SideMenuView } from "react-native-navigation-drawer-extension";
// <SideMenuView style={{ flex: 1 }}
//   drawerName={'CustomDrawer'}
//   direction={'right'}
//   passProps={{
//     animationOpenTime: 300,
//     animationCloseTime: 300,
//     dismissWhenTouchOutside: true,
//     fadeOpacity: 0.6,
//     drawerScreenWidth: '75%',
//     drawerScreenHeight: '100%',
//     parentComponentId: props.componentId,
//     style: {
//       backgroundColor: 'white', 
//     },
//   }} 
//   options={{
//     layout: {
//       componentBackgroundColor: 'transparent',
//     }}}  
//   >
// </SideMenuView>






const numColumns = 2;

const Products = () => {
    console.log("Products");

    const [searchQuery, setSearchQuery] = useState("");


    const handelSearch = (query) => {
        setSearchQuery(query);

    }

    const PordactCard = ({ name, price, img }) => {
        return (
            <View style={styles.card}>
                <Text> {name}</Text>
                <Text> {price}</Text>
                <Text> {img}</Text>
            </View>
        )
    }



    const RenderProducts = () => {
        return (
            <View >
                {/* <ScrollView showsVerticalScrollIndicator={false}>
                </ScrollView> */}
                {productData.map((product, i) => {
                    return <PordactCard name={product.name} price={product.price} img={product.img} key={i} />

                })}
            </View>
        );
    }


    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.Sbar}>
                <TextInput placeholder='Search '
                    clearButtonMode='always'
                    autoCapitalize='none' // this is for if we want the iinput upperCase automaticly
                    autoCorrect={false}
                    value={searchQuery}
                    onChangeText={(query) => handelSearch(query)}
                    style={styles.clearB} />
            </View>

            {/* <PordactCard name={"mosa"} price={10}/> */}
            {/* <RenderProducts/>  */}
            {/* <View>
                <Products productData={productData} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </View> */}

            <FlatList

                numColumns={numColumns}

                data={productData}
                renderItem={({ item }) => {
                    if (searchQuery === "") {
                        return (
                            <View  >
                               
                                    <TouchableOpacity  >
                                        <Text style={styles.bb} />
                                        <Image style={styles.img} source={{ uri: item.img }} />
                                    </TouchableOpacity>
                               
                                <PordactCard name={item.name} price={item.price} />



                            </View>
                        )
                    }

                    if (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        return (
                            <View style={styles.Sbartext}>
                                <TouchableOpacity>
                                    <Text > {item.name}   </Text>
                                </TouchableOpacity>
                                <Text />

                            </View>

                        )

                }}
            // numColumns={numColumns}
            />



        </View>

    )












}

export default Products

const styles = StyleSheet.create({

    card: {
        // borderColor: "black",
        width: '50%',
        aspectRatio: 1,
        padding: 10,
        marginTop: 5,
        marginLeft: 25,
    },
    Sbar: {
        marginHorizontal: 20,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: `#d3d3d3`,
        borderRadius: 8,
    },
    clearB: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    Sbartext: {
        marginVertical: 10,
        marginTop: 10,
        marginLeft: 30,
    },
    text: {
        fontSize: 3,
        marginLeft: 10,
    },

    img: {
        width: '50%',
        aspectRatio: 1,
        marginTop: 10,
        margin:20,

    },







})

{/* {productData.filter(productData) } */ }
{/* style={styles.nnp} */ }
{/* <RenderProducts /> */ }