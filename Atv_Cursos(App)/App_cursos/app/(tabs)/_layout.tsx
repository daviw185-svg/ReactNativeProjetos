import { Tabs } from "expo-router";
import useTheme from "@/hooks/useTheme"
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const tabsLayout = () => {
    const {colors} = useTheme()
    return (
<Tabs screenOptions={{
        tabBarActiveTintColor: colors.danger,
        tabBarInactiveTintColor: colors.bgSecondary,
        tabBarStyle: {
            paddingBottom: 30,
            paddingTop: 10,
            backgroundColor: colors.bgPrimary,
    }}}>
      <Tabs.Screen name="index" options={
        {title: "Home", 
        tabBarIcon: ({color}) => (
        <Ionicons name='home' color={color}/>)
        }}/>

      <Tabs.Screen name="page" options={
        {title: "Shopee",
        tabBarIcon: ({color}) => (
        <Ionicons name='cart' color={color}/>)
      }}/>
    </Tabs>
    )
}

export default tabsLayout