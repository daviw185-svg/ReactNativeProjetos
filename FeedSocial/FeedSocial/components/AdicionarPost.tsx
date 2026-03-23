import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '@/hooks/useTheme';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View, Image, Text } from 'react-native';


const AdicionarPost = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    const [newPost, setNewPost] = useState("");
    const addPost = useMutation(api.posts.addPost);
    const [newPostImg, setNewPostImg] = useState("");
    const addPostImg = useMutation(api.posts.addPost);

    const handleAddPost = async () => {
        if (newPost.trim(), newPostImg.trim()) {
            try {
                await addPost({ text: newPost.trim(), img: newPostImg.trim() })
            } catch (error) {
                console.log("Erro ao adicionar o Post", error);
                Alert.alert("Error", "Erro ao adicionar");
            }
        }
    }

    return (
        <View style={homeStyles.inputSection}>
            <View style={homeStyles.inputWrapper}>
                <TextInput style={homeStyles.input}
                    placeholder='O que está fazendo ultimamente?' placeholderTextColor={colors.textMuted}
                    multiline value={newPost} onChangeText={setNewPost} onSubmitEditing={handleAddPost} />
                <TextInput style={homeStyles.input}
                    placeholder='Adicionar Imgaem(Link URL)' placeholderTextColor={colors.textMuted}
                    multiline value={newPostImg} onChangeText={setNewPostImg} onSubmitEditing={handleAddPost} />
                

                <TouchableOpacity onPress={handleAddPost} disabled={!newPost.trim()}>
                    <LinearGradient style={homeStyles.addButton} colors={colors.gradients.danger}>
                        <Ionicons name='add' size={24} color={"#ffffff"}></Ionicons>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {/* <Image style={homeStyles.img} source={{ uri: "https://backloggd.b-cdn.net/home_demo/home-demo-collection.jpg" }} /> */}
        </View>
    )
}

export default AdicionarPost