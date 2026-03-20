import { createSettingsStyles } from "@/assets/styles/settings.styles"
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from "@/hooks/useTheme";
import LoadingSpinner from "@/components/LoadingSpinner" ;
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons'
import { LinearGradient } from "expo-linear-gradient";



const settings = () => {
  const { toggleDarkMode, colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
    

  return (
<<<<<<< HEAD
    <LinearGradient style={settingsStyles.container} colors={colors.gradients.primary}>
    <View style={settingsStyles.container}>
=======
    <LinearGradient colors={colors.gradients.primary} style={settingsStyles.container}>
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
      <Text>Settings</Text>
    <SafeAreaView style={settingsStyles.safeArea}>
             <TouchableOpacity style={settingsStyles.iconContainer} onPress={toggleDarkMode}>
              <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
              </TouchableOpacity>
            </SafeAreaView>
<<<<<<< HEAD
    </View>
=======
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
    </LinearGradient>
  )
}

export default settings