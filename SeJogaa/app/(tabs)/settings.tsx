import { createSettingsStyles } from "@/assets/styles/settings.styles"
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from "@/hooks/useTheme";
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons'

const settings = () => {
  const { toggleDarkMode, colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
    

  return (
    <LinearGradient colors={colors.gradients.primary} style={settingsStyles.container}>
      <Text>Settings</Text>
    
    <SafeAreaView style={settingsStyles.safeArea}>
             <TouchableOpacity style={settingsStyles.iconContainer} onPress={toggleDarkMode}>
              <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
              </TouchableOpacity>
            </SafeAreaView>
    </LinearGradient>
  )
}

export default settings