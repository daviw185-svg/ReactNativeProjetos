import { createSettingsStyles } from "@/assets/styles/settings.styles"
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from "@/hooks/useTheme";
import LoadingSpinner from "@/components/LoadingSpinner" ;
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons'
import { LinearGradient } from "expo-linear-gradient";



const settings = () => {
  const { toggleDarkMode, colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
    

  return (
    <LinearGradient style={settingsStyles.container} colors={colors.gradients.primary}>
    <View style={settingsStyles.container}>
      <Text>Settings</Text>
    <SafeAreaView style={settingsStyles.safeArea}>
             <TouchableOpacity style={settingsStyles.iconContainer} onPress={toggleDarkMode}>
              <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
              </TouchableOpacity>
            </SafeAreaView>
    </View>
    </LinearGradient>
  )
}

export default settings