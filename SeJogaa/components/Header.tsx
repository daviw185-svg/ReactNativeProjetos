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
    const games = useQuery(api.games.getGames);
    const gameCompletos = games ? games.filter((game) => game.isCompleted).length : 0;
    const gameTotal = games ? games.length : 0;
    const barraDeProgresso = gameTotal > 0 ? (gameCompletos / gameTotal) * 100 : 0;
// ternário =           variável = condição ? se verdadeiro : se falso

  return (
    <View style={homeStyles.header}>
        <View style={homeStyles.titleContainer}>
            {/* Icone */}
            <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
                <Ionicons name='calendar' size={40} color={"#fff"}/>
            </LinearGradient>
        </View>
    

    {/*TEXTOS*/}
    <View style={homeStyles.titleTextContainer}>
        <Text style={homeStyles.title}>Se JOGAAAA!!🕹️</Text>
        <Text style={homeStyles.subtitle}> {gameCompletos} de {gameTotal} games zerados</Text>
    </View>

    { /* BARRA DE PROGRESSO */ }
    <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
            <View style={homeStyles.progressBar}>
                <LinearGradient colors={["#ff0000", "#07ff49"]} 
                style={[homeStyles.progressFill, {width:`${barraDeProgresso}%` }]}>
                </LinearGradient>
            </View>
        </View>
    </View>
    </View>
  )
}

export default Header