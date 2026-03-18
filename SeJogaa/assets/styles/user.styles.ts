import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createUserStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",    
      alignItems: "center",
    },
    safeArea: {
      flex:1, 
    },
    TouchableOpacity: {
      backgroundColor: "#000000",
    },
    iconContainer: {
      width: 56,
      height: 56,
      borderRadius: 16,
      marginTop: 300,
      marginLeft: 1700,
    },
    iconUser: {
      color: colors.text,
        marginTop: 50,
    },
    Text: {
      width: "50%",
      marginTop: 20,
      padding: 20,
      justifyContent: "space-between",
      gap: 10,
      backgroundColor: "#000000",
      color: "#ffffff",
      fontSize: 20,
      fontWeight: "500",
      borderRadius: 10,
    }
  })

  return styles;
};