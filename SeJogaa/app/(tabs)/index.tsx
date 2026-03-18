import { createHomeStyles } from "@/assets/styles/home.styles";
import AdicionarGame from "@/components/AdicionarGame";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import LoadingSpinner from "@/components/LoadingSpinner" ;
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
type Game = Doc<"game">


export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const games = useQuery(api.games.getGames);
  // const toggleGame = useMutation(api.games.toggleGame)
  const isLoading = games === undefined
  if (isLoading) return <LoadingSpinner/>

  // const handleToggleGame = async (id: Id"<game>") => {

  // }

  const renderGameItem = ({item}: {item: Game}) => {
    return (
      <View style={homeStyles.gameItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.gameItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View>
            <Text
              style={[
                homeStyles.gameText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.text}
            </Text>
          </View>
        </LinearGradient>
      </View>
    )
  }

  return (
    <LinearGradient colors={colors.gradients.primary} style={homeStyles.container}>
    <SafeAreaView style={homeStyles.safeArea}>
      <Header />
      <AdicionarGame/>
      <FlatList data={games} renderItem={renderGameItem} keyExtractor={(item) => item._id} style={homeStyles.gameList}
        contentContainerStyle={homeStyles.gameListContent}/>
      {/* {games?.map((game) => <Text key={game._id}>{game.text}</Text>)} */}
      <TouchableOpacity style={homeStyles.iconTheme} onPress={toggleDarkMode}>
        <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
      </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
  )
}