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
      color: "#ffffff",
        marginTop: -50,
        marginLeft: 900,
    },
    bannerUser:{
      width: 1900,
      height: 400
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
    Textb: {
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
    },
    postItem: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 20,
      borderRadius: 20,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
    postText: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: "500",
      padding: 20,
      color: "#ffffff",
    },
    postTextp: {
      fontSize: 17,
      lineHeight: 24,
      fontWeight: "500",
      marginTop: 336,
      color: "#ffffff",
      padding: 20
    },
    postImg: {
      width: 500,
      height: 400,
      borderRadius: 10,

      overflow : 'hidden'
    }
  })

  return styles;
};