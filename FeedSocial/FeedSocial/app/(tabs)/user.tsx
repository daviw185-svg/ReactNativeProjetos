import { createUserStyles } from '@/assets/styles/user.styles';
import useTheme from '@/hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { SafeAreaView } from 'react-native-safe-area-context';


const user = () => {
  const { toggleDarkMode, colors } = useTheme();
  const userStyles = createUserStyles(colors);
  return (
    <><LinearGradient colors={colors.gradients.primary} style={userStyles.container}>
        <View >  
            <Image style={userStyles.bannerUser} source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/003/368/914/small/country-blues-harmonica-resting-on-top-of-acoustic-guitar-video.jpg"}}></Image>
          <FontAwesome style={userStyles.iconUser} name="user-circle" color="#ffffff" size={120} />
          </View>
        <Text style={userStyles.Text}> Nome Completo: Davi Willian Santos de Souza </Text>
        <Text style={userStyles.Text}> Nome de Usuário: Davi Guilherme </Text>
        <Text style={userStyles.Text}> Email: daviw185@gmail.com </Text>
        <Text style={userStyles.Textb}> Bio:</Text>
        <SafeAreaView style={userStyles.safeArea}>
         <TouchableOpacity style={userStyles.iconContainer} onPress={toggleDarkMode}>
          <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
          </TouchableOpacity>
        </SafeAreaView>           
         
        <Text style={userStyles.postText}>Ultimo Post Lançado: </Text>
        <View style={userStyles.postItem}>
            <ImageBackground style={userStyles.postImg} source={{ uri: "https://disneyplusbrasil.com.br/wp-content/uploads/2026/01/Vingadores-Doutor-Destino-logo.jpg" }} 
            resizeMode="cover">
            <LinearGradient colors={colors.gradients.fade}>
            <Text style={userStyles.postTextp}>Esperando 8 meses e 23 dias para assistir essa pérola 🤩🤩 </Text>
            </LinearGradient>
            </ImageBackground>
        </View>
        <View style={userStyles.postItem}>
            <ImageBackground style={userStyles.postImg} source={{ uri: "https://i.ytimg.com/vi/6WSRTZ9GDJs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzChGqKE_WYBDZppQ67kyqAtLptg" }} 
            resizeMode="cover">
            <LinearGradient colors={colors.gradients.fade}>
            <Text style={userStyles.postTextp}>Platinando Spider Man no PS5 </Text>
            </LinearGradient>
            </ImageBackground>
        </View>
      </LinearGradient></>
  )
}

export default user