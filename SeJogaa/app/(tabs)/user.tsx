import { createUserStyles } from '@/assets/styles/user.styles';
import useTheme from '@/hooks/useTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const user = () => {
  const { toggleDarkMode, colors } = useTheme();
  const userStyles = createUserStyles(colors);
  return (
    <><View style={userStyles.container}>
        <View >  
          <FontAwesome style={userStyles.iconUser} name="user-circle" color="#ffffff" size={120} />
          </View>
        <Text style={userStyles.Text}> Nome Completo: Davi Willian Santos de Souza </Text>
        <Text style={userStyles.Text}> Nome de Usuário: Davi Guilherme </Text>
        <Text style={userStyles.Text}> Email: daviw185@gmail.com </Text>
        <Text style={userStyles.Text}> Atual Curso: Engenharia Mecânica </Text>
        <SafeAreaView style={userStyles.safeArea}>
         <TouchableOpacity style={userStyles.iconContainer} onPress={toggleDarkMode}>
          <MaterialCommunityIcons name='circle-half-full' color = {colors.text} size={50}/>
          </TouchableOpacity>
        </SafeAreaView>
      </View></>
  )
}

export default user