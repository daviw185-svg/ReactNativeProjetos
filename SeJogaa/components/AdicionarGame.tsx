import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/hooks/useTheme';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View, Image, Text } from 'react-native';


const AdicionarGame = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    const [newGame, setNewGame] = useState("");
    const addGame = useMutation(api.games.addGame);

    const handleAddGame = async () => {
        if (newGame.trim()) {
            try {
                await addGame({ text: newGame.trim() })
            } catch (error) {
                console.log("Erro ao adicionar o game", error);
                Alert.alert("Error", "Erro ao adicionar");
            }
        }
    }

    return (
        <View style={homeStyles.inputSection}>
            <View style={homeStyles.inputWrapper}>
                <TextInput style={homeStyles.input}
                    placeholder='Digite uma tarefa' placeholderTextColor={colors.textMuted}
                    multiline value={newGame} onChangeText={setNewGame} onSubmitEditing={handleAddGame} />

                

                <TouchableOpacity onPress={handleAddGame} disabled={!newGame.trim()}>
                    <LinearGradient style={homeStyles.addButton} colors={colors.gradients.danger}>
                        <Ionicons name='add' size={24} color={"#ffffff"}></Ionicons>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {/* <Image style={homeStyles.img} source={{ uri: "https://backloggd.b-cdn.net/home_demo/home-demo-collection.jpg" }} /> */}
        </View>
    )
}

export default AdicionarGame