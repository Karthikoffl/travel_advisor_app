import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ItemScreen = ({route}) => {
    const navigation = useNavigation();

    const data = route?.params?.param;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    console.log(data);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
        <ScrollView className="flex-1 px-4 py-6">
            <View className="relative bg-white shadow-lg">
                <Image 
                source={
                    {uri : 
                        data?.photo?.images?.large?.url  ?
                        data?.photo?.images?.large?.url :
                        "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                    }
                  }
                  className="w-full h-72 object-cover rounded-2xl"
                />

                <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                  <TouchableOpacity 
                  onPress={() => navigation.navigate("Discover")}
                  className="w-10 h-10 rounded-md items-center justify-center bg-white">
                    <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
                  </TouchableOpacity>

                  <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                  <FontAwesome5 name="heart" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                  <View className="flex-row space-x-2 items-center">
                    <Text className="text-[12px] font-bold text-gray-100">
                        {data?.price_level}
                    </Text>
                    <Text className="text-[28px] font-bold text-gray-100">
                        {data?.price}
                    </Text>
                  </View>

                  <View className="px-2 py-2 rounded-md bg-teal-100">
                    <Text>{data?.open_now_text}</Text>
                  </View>
                </View>
            </View>

            <View className="mt-6">
                  <Text className="text-[#428288] text-[24px] font-bold">
                    {data?.name}
                  </Text>
                  <View className="flex-row items-center space-x-2 mt-2">
                  <FontAwesome name="map-marker" size={16} color="#BC9EA6" />
                  <Text className="text-[#8C9EA6] text-[14px] font-semibold">
                    {data?.location_string}
                  </Text>
                  </View>
            </View>

            <View className="mt-4 flex-row items-center justify-between">
                {data?.rating && (
                    <View className="flex-row items-center space-x-2">
                        <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                            <FontAwesome name="star" size={20} color="#D58574" />     
                        </View>
                        <View>
                            <Text className="text-[#515151]">{data?.rating}</Text>
                            <Text className="text-[#515151]">Ratings</Text>
                        </View>
                    </View>
                )}
                {data?.price_level && (
                    <View className="flex-row items-center space-x-2">
                        <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                        <MaterialIcons name="attach-money" size={20} color="#D58574" />     
                        </View>
                        <View>
                            <Text className="text-[#515151]">{data?.price_level}</Text>
                            <Text className="text-[#515151]">Price Level</Text>
                        </View>
                    </View>
                )}
                {data?.bearing && (
                    <View className="flex-row items-center space-x-2">
                        <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                        <FontAwesome5 name="map-signs" size={20} color="#D58574" />     
                        </View>
                        <View>
                            <Text className="text-[#515151] capitalize">{data?.bearing}</Text>
                            <Text className="text-[#515151]">Bearing</Text>
                        </View>
                    </View>
                )}
            </View>
             {data?.description && (
                <Text className="mt-4 tracking-wide text-[13px] font-regular text-[#000]">
                    {data?.description}
                </Text>
             )}

             {data?.cuisine && (
                <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                    {data?.cuisine.map((n) => (
                        <TouchableOpacity
                            key={n.key}
                            className="px-2 py-1 rounded-md bg-emerald-100 text-black text-semibold">
                                <Text>{n.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
             )}
            <View className="space-y-2 bg-gray-100 rounded-2xl px-4 py-4 mt-2">
                {data?.phone && (
                    <View className="items-center flex-row space-x-6">
                        <FontAwesome name="phone" size={20} color="#428288" />
                        <Text className="text-md">{data?.phone}</Text>
                    </View>
                )}
                {data?.email && (
                    <View className="items-center flex-row space-x-6">
                        <FontAwesome name="envelope" size={20} color="#428288" />
                        <Text className="text-md">{data?.email}</Text>
                    </View>
                )}
                {data?.address && (
                    <View className="items-center flex-row space-x-6">
                        <FontAwesome name="map-pin" size={20} color="#428288" />
                        <Text className="text-md">{data?.address}</Text>
                    </View>
                )}

                <View className="flex-row mt-12 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-4">
                    <Text className="text-xl font-regular uppercase tracking-wider text-gray-100">
                        Book Now
                    </Text>
                    <View className="items-center justify-center px-2 flex-row">
                        <AntDesign name="arrowright" size={24} color="#fff" />
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen