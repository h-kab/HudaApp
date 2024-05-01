// import React, {useState} from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import ScreenNames from '../../route/screenNames';

// const ShoeItem = props => {
//   const {id, name, price,onPress,hideImage} = props;
//   // const brand = props.brand
//   // const year = props.year 
//   // const km = props.km
//   // const hideImage = props.hideImage

//   const [like /** state */, setLike /*setState */] = useState(0);

//   const navigation = useNavigation();

//   // var like = 0;

//   const onPressHandler = () => {
//     onPress ? onPress() : onItemPress();
//   };

//   const onItemPress = () => {
//     // like++;
//     setLike(like + 1);

//     const shoe = {
//       id,
//       name,
//       price,
//       img: props.img,
//       hideImage: true,

//     };

//     navigation.navigate(ScreenNames.product, {data: shoe});
//   };

//   return (
//     <TouchableOpacity onPress={onPressHandler}>
//       <View style={styles.container}>
//         <View style={styles.txtContainer}>
//           <Text style={styles.txt}>{`name: ` + props.name}</Text>
//           <Text style={styles.txt}>{`price: ${price}`}</Text>
//           <Text style={styles.txt}>{'id: ' + id}</Text>
//           <Text style={styles.txt}>{'like: ' + like}</Text>
//         </View>
//         {!hideImage && <Image style={styles.img} source={props.img} />}
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ShoeItem;

// const styles = StyleSheet.create({
//   txt: {
//     fontSize: 25,
//   },
//   container: {
//     borderWidth: 1,
//     paddingLeft: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   plus: {
//     fontSize: 45,
//     textAlign: 'center',
//   },
//   plusContainer: {
//     borderWidth: 1,
//     flex: 1,
//   },
//   txtContainer: {
//     flex: 1,
//   },
//   img: {
//     width: 180,
//     height: 180,
//     resizeMode: 'contain',
//   },
// });
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../route/screenNames';

const ShoeItem = props => {
  const { id, name, price, onPress, hideImage } = props;
  const [like, setLike] = useState(0);
  const navigation = useNavigation();

  const onPressHandler = () => {
    onPress ? onPress() : onItemPress();
  };

  const onItemPress = () => {
    setLike(like + 1);

    const shoe = {
      id,
      name,
      price,
      img: props.img,
      hideImage: true,
    };

    navigation.navigate(ScreenNames.product, { data: shoe });
  };

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>{`name: ` + props.name}</Text>
          <Text style={styles.txt}>{`price: ${price}`}</Text>
          <Text style={styles.txt}>{'id: ' + id}</Text>
          <Text style={styles.txt}>{'like: ' + like}</Text>
        </View>
        {!hideImage && <Image style={styles.img} source={props.img} />}
      </View>
    </TouchableOpacity>
  );
};

export default ShoeItem;

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
  },
  container: {
    borderWidth: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtContainer: {
    flex: 1,
  },
  img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});
