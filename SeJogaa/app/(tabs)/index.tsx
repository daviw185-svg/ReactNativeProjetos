import { createHomeStyles } from "@/assets/styles/home.styles";
import AdicionarGame from "@/components/AdicionarGame";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import LoadingSpinner from "@/components/LoadingSpinner" ;
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { Ionicons } from "@expo/vector-icons";
type Game = Doc<"game">


export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const [editingId, setEditingId] = useState <Id<"games"> | null>(null)
  const [editText, setEditText] = useState ("")

  const games = useQuery(api.games.getGames);
  const toggleGame = useMutation(api.games.toggleGame);
  const deleteGame = useMutation(api.games.deleteGame);
  const updateGame = useMutation(api.games.updateGame);

  const isLoading = games === undefined
  if (isLoading) return <LoadingSpinner/>

  const handleToggleGame = async (id: Id<"game">) => {
    try {
      await toggleGame({ id });
    } catch (error) {
      console.log("Error toggling game", error);
      Alert.alert("Error", "Failed to toggle game");
    }
  };

  const handleDeleteGame = async (id: Id<"game">) => {
    Alert.alert("Delete Game", "Você tem certeza que quer deletar esse jogo?", [
      {text: "Cancel", style:"cancel"},
      {text: "Delete" , style:"destructive", onPress: () => deleteGame({ id })},
    ])
  }

  const handleEditItem = (games : Game) =>{
    setEditText(games.text);
    setEditingId(games._id);
  }

  const handleSaveEdit = async () => {
    if(editingId){
      try{
        await updateGame({id : editingId, text : editText.trim()})
        setEditingId(null)
        setEditText("")
      } catch (error) {
        console.log("Erro no processo de update", error)
        Alert.alert("Erro", "Erro no processo de update")
      }
    }
  }

  const handleCancel = async () => {
    setEditText("");
    setEditingId(null);
  }


  const renderGameItem = ({item}: {item: Game}) => {
    return (
      <View style={homeStyles.gameItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.gameItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleGame(item._id)}
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
           
           {isEditing ? (
            <View style={homeStyles.editContainer}>
              <TextInput
                style={homeStyles.editInput}
                value={editText}
                onChangeText={setEditText}
                autoFocus
                multiline
                placeholder="Edit your game..."
                placeholderTextColor={colors.textMuted}
              />
              <View style={homeStyles.editButtons}>
                <TouchableOpacity onPress={handleSaveEdit} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.success} style={homeStyles.editButton}>
                    <Ionicons name="checkmark" size={16} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCancel} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.muted} style={homeStyles.editButton}>
                    <Ionicons name="close" size={16} color="#fff" />
                    <Text style={homeStyles.editButtonText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
          <View style={homeStyles.gameTextContainer}>
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
          <View style={homeStyles.gameActions}>
                <TouchableOpacity onPress={() => handleEditGame(item)} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.warning} style={homeStyles.actionButton}>
                    <Ionicons name="pencil" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteGame(item._id)} activeOpacity={0.8}>
                  <LinearGradient colors={colors.gradients.danger} style={homeStyles.actionButton}>
                    <Ionicons name="trash" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </LinearGradient>
      </View>
            
    );
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