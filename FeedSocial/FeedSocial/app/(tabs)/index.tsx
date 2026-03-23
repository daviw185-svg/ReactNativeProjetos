import { createHomeStyles } from "@/assets/styles/home.styles";
import AdicionarPost from "@/components/AdicionarPost";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import LoadingSpinner from "@/components/LoadingSpinner" ;
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
type Post = Doc<"post">


export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const posts = useQuery(api.posts.getPosts);
  // const togglePost = useMutation(api.posts.togglePost)
  const isLoading = posts === undefined
  if (isLoading) return <LoadingSpinner/>

  // const handleTogglePost = async (id: Id"<post>") => {

  // }

  const renderPostItem = ({item}: {item: Post}) => {
    return (
      <View style={homeStyles.postItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.postItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={homeStyles.containerNoScroll}>
            <Text
              style={[
                homeStyles.postText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.text}
            </Text>
            <img src={item.img} style={homeStyles.postImg} />
          </View>
        </LinearGradient>
      </View>
    )
    
  }

  return (
    <LinearGradient colors={colors.gradients.primary} style={homeStyles.containerNoScroll}>
    <SafeAreaView style={homeStyles.safeArea}>
      <Header />
      <AdicionarPost/>
      <FlatList data={posts} renderItem={renderPostItem} keyExtractor={(item) => item._id} style={homeStyles.postList}
        contentContainerStyle={homeStyles.postListContent}/>
      {/* {posts?.map((post) => <Text key={post._id}>{post.text}</Text>)} */}
      <TouchableOpacity style={homeStyles.iconTheme} onPress={toggleDarkMode}>
        <MaterialCommunityIcons name='circle-half-full' color = {colors.bg} size={50}/>
      </TouchableOpacity>
    </SafeAreaView>
    </LinearGradient>
  )
}