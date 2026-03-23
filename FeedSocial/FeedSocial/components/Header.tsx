import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text } from 'react-native';


const Header = () => {
    const { colors} = useTheme();
    const homeStyles = createHomeStyles(colors);
    const posts = useQuery(api.posts.getPosts);
    const postCompletos = posts ? posts.filter((post) => post.isCompleted).length : 0;
    const postTotal = posts ? posts.length : 0;
    const barraDeProgresso = postTotal > 0 ? (postCompletos / postTotal) * 100 : 0;
// ternário =           variável = condição ? se verdadeiro : se falso

  return (
    <View style={homeStyles.header}>
        <View style={homeStyles.titleContainer}>
            {/* Icone */}
            <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
                <Ionicons name='camera' size={40} color={"#fff"}/>
            </LinearGradient>
        </View>
    

    {/*TEXTOS*/}
    <View style={homeStyles.titleTextContainer}>
        <Text style={homeStyles.title}>Posta Aí!🕹️</Text>
    </View>
    </View>
  )
}

export default Header