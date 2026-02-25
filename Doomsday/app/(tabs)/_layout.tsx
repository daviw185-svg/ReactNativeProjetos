import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
import Tabs from '.'


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
        tabBarIcon: ({color}: {color: string}) => (
        <Ionicons name='home' color={color}/>)
        }}/>

      <Tabs.Screen name="page" options={
        {title: "Shopee",
        tabBarIcon: ({color}: {color: string}) => (
        <Ionicons name='cart' color={color}/>)
      }}/>
    </Tabs>
  )
}

export default TabsLayout