import { createHomeStyles } from "@/assets/styles/home.styles";
import AdicionarGame from "@/components/AdicionarGame";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
<<<<<<< HEAD
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Game = Doc<"game">

=======
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
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab


export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const games = useQuery(api.games.getGames);
<<<<<<< HEAD
  const isLoading = games === undefined
  if (isLoading) return <LoadingSpinner/>

  const handleToggleGames = async (id: Id<"games">) => {
    try{
      await toggleGames({id})
    } catch (error) {
      console.log("Erro ao mudar game", error);
      Alert.alert("Erro", "Erro ao mudar o game")
    }
  }
 
 const renderGameItem = ({item}: {item: Game}) => {
=======
  // const toggleGame = useMutation(api.games.toggleGame)
  const isLoading = games === undefined
  if (isLoading) return <LoadingSpinner/>

  // const handleToggleGame = async (id: Id"<game>") => {

  // }

  const renderGameItem = ({item}: {item: Game}) => {
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
    return (
      <View style={homeStyles.gameItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.gameItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
<<<<<<< HEAD
               <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleGames(item._id)}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={[
                homeStyles.checkboxInner,
                {
                  borderColor: item.isCompleted ? "transparent" : colors.border,
                },
              ]}
            >
              {item.isCompleted && (
                <Ionicons name="checkmark" size={18} color="#fff" />
              )}
            </LinearGradient>
          </TouchableOpacity>
=======
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
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
<<<<<<< HEAD
=======
      {/* {games?.map((game) => <Text key={game._id}>{game.text}</Text>)} */}
      <TouchableOpacity style={homeStyles.iconTheme} onPress={toggleDarkMode}>
        <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
      </TouchableOpacity>
>>>>>>> 2164fb0730329057a8e9002da97009d69ab937ab
    </SafeAreaView>
    </LinearGradient>
  )
}