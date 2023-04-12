import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
    const navigation = useNavigation()
    return (
   <TouchableOpacity
    onPress={() => navigation.navigate("ItemScreen", { param: data })}
    className="rounded-md border border-gray-300 space-y-1 px-1 py-1 shadow-md bg-white w-[178px] my-1">
        <Image 
            source={{ uri : imageSrc }}
            className="w-full h-40 rounded-md object-cover"
        />

        {title ? (
            <>
            <Text className="text-[#428288] text-[16px] font-bold">
                {title?.length > 14 ? `${title.slice[0,14]}..` : title}
            </Text>

            <View className="flex-row items-center space-x-1">
                <FontAwesome name="map-marker" size={12} color="#B597A2" />
                <Text className="text-[#428288] text-[12px] font-bold">
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