import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const MenuContainer = ({ title, imageSrc, type, setType }) => {
    const handlePress = () => {
        setType(title.toLowerCase());
    }
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
        <View className={`w-20 h-20 p-2 shadow-sm rounded-full items-center justify-center ${type === title.toLowerCase() ? "bg-gray-200" : ""}`}>
            <Image
                source={imageSrc} className="w-full h-full object-contain"/>
        </View>
        <Text className="text-[#00BCC9] text-md font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};TouchableOpacity

export default MenuContainer