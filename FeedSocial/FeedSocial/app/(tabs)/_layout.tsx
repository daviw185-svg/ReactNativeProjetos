import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    const { colors } = useTheme()
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor : colors.surface,
            tabBarInactiveTintColor : colors.surface,
            tabBarStyle: {
                paddingBottom : 30,
                paddingTop: 10,
                backgroundColor : colors.text
            },
            headerShown: false
        }}>
            <Tabs.Screen name='index' options={
                { title: "Home",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='home' color={colors.surface} size={size}/>
                  ) 
            }} />
           <Tabs.Screen name='settings' options={
                { title: "Settings",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='settings' color={colors.surface} size={size}/>
                  ) 
            }} />
           <Tabs.Screen name='user' options={
                { title: "User",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='person' color={colors.surface} size={size}/>
                  ) 
            }} />
        </Tabs>
    )
}

export default TabsLayout