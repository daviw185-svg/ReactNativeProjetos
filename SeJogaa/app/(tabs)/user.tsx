import { createUserStyles } from '@/assets/styles/user.styles';
import useTheme from '@/hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { SafeAreaView } from 'react-native-safe-area-context';



const user = () => {
  const { toggleDarkMode, colors } = useTheme();
  const userStyles = createUserStyles(colors);
  return (
    <><LinearGradient colors={colors.gradients.primary} style={userStyles.container}>
        <View >  
          <FontAwesome style={userStyles.iconUser} name="user-circle" color="#ffffff" size={120} />
          </View>
        <Text style={userStyles.Text}> Nome Completo: Davi Willian Santos de Souza </Text>
        <Text style={userStyles.Text}> Nome de Usuário: Davi Guilherme </Text>
        <Text style={userStyles.Text}> Email: daviw185@gmail.com </Text>
        <Text style={userStyles.Textg}> Jogando agora: <Image style={userStyles.img} source={{ uri: "https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg" }} /> </Text>
        <SafeAreaView style={userStyles.safeArea}>
         <TouchableOpacity style={userStyles.iconContainer} onPress={toggleDarkMode}>
          <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient></>
  )
}

export default user