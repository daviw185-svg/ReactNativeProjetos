import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet, } from "react-native";


export const createUserStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",    
      alignItems: "center",
      overflow: "scroll"
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
      color: colors.bg,
        marginTop: 50,
    },
    Text: {
      width: "50%",
      marginTop: 20,
      padding: 20,
      justifyContent: "space-between",
      gap: 10,
      backgroundColor: colors.bg,
      color: colors.text,
      fontSize: 20,
      fontWeight: "500",
      borderRadius: 10,
    },
    Textg: {
      width: "50%",
      marginTop: 20,
      padding: 20,
      justifyContent: "space-between",
      gap: 10,
      backgroundColor: colors.bg,
      color: colors.text,
      fontSize: 20,
      fontWeight: "500",
      borderRadius: 10,
      
    },
    img: {
      marginLeft: 20,
      width: 161,
      height: 200
    }
  })

  return styles;
};