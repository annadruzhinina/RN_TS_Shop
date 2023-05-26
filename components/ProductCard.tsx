import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {useColorScheme} from 'nativewind';
import {useState} from 'react';

const ProductCard = ({image, category, title, price, description}) => {
  const [count, setCount] = useState(1);
  const {colorScheme} = useColorScheme;
  return (
    <View className=" w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5  ">
      <View style={{alignSelf: 'flex-end'}}>
        <AntDesign name="heart" size={30} color="red" />
      </View>
      <View className="bg-white rounded-xl my-2">
        <Image
          source={{uri: image}}
          className="w-full h-72 "
          style={{resizeMode: 'contain'}}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
