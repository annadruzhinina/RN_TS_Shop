import React from 'react';
import {Text, View, Switch, StatusBar, SafeAreaView} from 'react-native';
import {useColorScheme} from 'nativewind';
import ProductsLists from '../components/ProductsLists';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const Home = () => {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex-1 bg-gray-300 dark:bg-black items-center justify-center">
      <View className="flex-row w-full justify-between items-center gap-5">
        <View className="flex-row items-center">
          <Text className="text-2xl font-bold dark:text-white mr-2">
            New Collection
          </Text>
          <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
        </View>
        <View>
          <AntDesign
            name="profile"
            size={30}
            color={colorScheme === 'dark' ? 'white' : 'black'}
            onPress={() => {
              navigation.navigate('AboutUs');
            }}
          />
        </View>
      </View>

      <ProductsLists />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
};

export default Home;
