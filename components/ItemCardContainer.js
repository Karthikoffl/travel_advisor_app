import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
    const navigation = useNavigation()
    return (
   <TouchableOpacity
    onPress={() => navigation.navigate("ItemScreen", { param: data })}
    className="rounded-xl border border-gray-300 space-x-0.5 px-2 py-2 shadow-lg bg-white w-[160px] my-1">
        <Image 
            source={{ uri : imageSrc }}
            className="w-full h-40 rounded-xl object-cover"
        />

        {title ? (
            <>
            <Text className="text-[#174D52] text-[16px] font-bold">
                {title?.length > 14 ? `${title.slice[0,14]}..` : title}
            </Text>

            <View className="flex-row items-center space-x-1">
                <FontAwesome name="map-marker" size={12} color="#174000" />
                <Text className="text-[#174000] text-[12px] font-bold">
                    {location?.length > 18 ? `${title.slice[0,14]}..` : location}
                </Text>
            </View>
        </>
    ) : (
    <></>
    )}
   </TouchableOpacity>
  );
};

export default ItemCardContainer