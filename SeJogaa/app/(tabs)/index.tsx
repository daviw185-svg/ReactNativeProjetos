import { createHomeStyles } from "@/assets/styles/home.styles";
import AdicionarGame from "@/components/AdicionarGame";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

 

  return (
    <LinearGradient colors={colors.gradients.primary} style={homeStyles.container}>
    <SafeAreaView style={homeStyles.safeArea}>
      <Header />
      <AdicionarGame/>
      <TouchableOpacity style={homeStyles.iconTheme} onPress={toggleDarkMode}>
        <MaterialCommunityIcons name='circle-half-full' color = {colors.text} size={50}/>
      </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
  )
}