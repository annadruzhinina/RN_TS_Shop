import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AboutUs'
>;

type AboutUsRouteProp = RouteProp<RootStackParamList, 'AboutUs'>;

type Props = {
  navigation: AboutUsRouteProp;
  route: AboutUsRouteProp;
};

const AboutUs = ({route}: Props) => {
  const navigation = useNavigation<AboutUsRouteProp>();

  return (
    <SafeAreaView>
      <View className="flex-row justify-center">
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className="flex-row justify-center text-purple-50 mt-3 p-3 rounded-lg border border-ppurple-500 mx-auto">
              <Text className="text-ppurple">Go back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;
