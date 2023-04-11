import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from  'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from "@react-navigation/native";
import { Avatar, Hotels, Attractions, Restaurants, NotFound } from '../assets';
import MenuContainer from '../components/MenuContainer';

import { FontAwesome } from '@expo/vector-icons';

const Discover = () => {

    const navigation = useNavigation();

    const [type, setType] = useState("restaurants")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
            <Text className="text-[40px] text-[#03646B] font-bold">Discover</Text>
            <Text className="text-[#527283] text-[32px]">the beauty today</Text>
        </View>

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
            <Image
                source={Avatar}
                className="w-full h-full rounded-md object-cover"
            />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
        GooglePlacesSearchQuery={{ fields : "geometry" }}
        placeholder='Search'
        fetchDetails={true}
        onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
        }}
        query={{
            key: 'AIzaSyDOR3yJpu9iVazx0tJ3cZhrMpPvyFhBbGo',
            language: 'en',
        }}
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-6 mt-8">
            <MenuContainer
                key={"hotel"}
                title={"Hotels"}
                imageSrc = {Hotels}
                type={type}
                setType={setType}
            />

            <MenuContainer
                key={"attractions"}
                title={"Attractions"}
                imageSrc = {Attractions}
                type={type}
                setType={setType}
            />

            <MenuContainer
                key={"restaurants"}
                title={"Restaurants"}
                imageSrc = {Restaurants}
                type={type}
                setType={setType}
            />
        </View>

        <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
                <Text className="text-[#2C7379] text-[28px] font-bold">Top Picks</Text>
                <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                    <Text className="text-[#A0C4C7] text-[18px] font-bold">Explore</Text>
                    <FontAwesome name="long-arrow-right" size={20} color="#A0C4C7" />
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover