import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#ff3c00',
        tabBarStyle: {
            paddingBottom: 30,
            paddingTop: 10,
            backgroundColor: '#c6c6c6',
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

export default TabsLayout