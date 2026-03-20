import { createUserStyles } from '@/assets/styles/user.styles';
import useTheme from '@/hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
<<<<<<< HEAD
import LoadingSpinner from "@/components/LoadingSpinner" ;
import { Text, View, Image } from 'react-native';
=======
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";


const user = () => {
  const { toggleDarkMode, colors } = useTheme();
  const userStyles = createUserStyles(colors);
  return (
<<<<<<< HEAD
    <LinearGradient style={userStyles.container} colors={colors.gradients.primary}>
    <View style={userStyles.container}>
=======
    <><LinearGradient colors={colors.gradients.primary} style={userStyles.container}>
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
        <View >  
          <FontAwesome style={userStyles.iconUser} name="user-circle" color="#ffffff" size={120} />
          </View>
        <Text style={userStyles.Text}> Nome Completo: Davi Willian Santos de Souza </Text>
        <Text style={userStyles.Text}> Nome de Usuário: Davi Guilherme </Text>
        <Text style={userStyles.Text}> Email: daviw185@gmail.com </Text>
        <Text style={userStyles.Textg}> Jogando agora: <Image style={userStyles.img} source={{ uri: "https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg" }} /> </Text>
        <SafeAreaView style={userStyles.safeArea}>
<<<<<<< HEAD
        </SafeAreaView>
      </View>
      </LinearGradient>
=======
         <TouchableOpacity style={userStyles.iconContainer} onPress={toggleDarkMode}>
          <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient></>
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
  )
}

export default user