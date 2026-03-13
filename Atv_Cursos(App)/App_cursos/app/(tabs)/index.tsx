import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import useTheme from "@/hooks/useTheme";

export default function Index() {
  // Trocar o tema  
  const { toggleDarkMode } = useTheme();
    
    // backend
    const cursos = useQuery(api.cursos.getCursos)
    const addCursos = useMutation(api.cursos.addCursos)

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.inicio}>Bem-vindo ao SENAI Cursos</Text>
        <View style={styles.abertura}>
          <Text style={styles.texto}>
            O SENAI é uma instituição de ensino técnico e profissionalizante que oferece uma ampla variedade de cursos em diversas áreas, como tecnologia, indústria, saúde, entre outras. Com uma abordagem prática e voltada para o mercado de trabalho, o SENAI prepara os alunos para enfrentar os desafios do mundo profissional, proporcionando conhecimentos teóricos e habilidades práticas essenciais para o sucesso na carreira. Seja para quem busca uma formação técnica ou para aqueles que desejam aprimorar suas habilidades, o SENAI é uma excelente escolha para alcançar seus objetivos educacionais e profissionais.
          </Text>
        </View>
        <View style={styles.divider}>Veja uma das opções abaixo:</View>
        <View style={styles.ti}>
            <Text style={styles.tiText}>Tecnologia da Informação e Comunicação</Text> </View>
        <View style={styles.ds}>
            <Text style={styles.dsText}>Análise e Desenvolvimento de Sistemas</Text>
        </View>
        <View style={styles.rd}>
            <Text style={styles.rdText}>Rede de Computadores</Text>
        </View>
        <View style={styles.eng}>    
          <Text style={styles.engText}>Engenharia</Text>
           </View>
           <View style={styles.maisCursos}>    
          <Link style={styles.links} href={"/(tabs)/maisCursos"}>Mais Cursos</Link>
           </View>
                <TouchableOpacity onPress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>
                <TouchableOpacity onPress={() => addCursos({nome: "Curso de react"})}>ADICIONAR CURSO</TouchableOpacity>
      </View>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#00293d",
    alignItems: "center",
  },
  main: {
    flex:1
  },

  inicio: {
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "#ffffff",
  },

  abertura: {
    justifyContent: "center",
    width: 800,
    height: 230,
    backgroundColor: "#ff9100",
    marginTop: 20,
    borderRadius: 10,
    padding: 30,
  },
  texto: {
    color: "#ffffff",
    fontSize: 19,
    fontFamily: "Arial",
  },
  divider: {
    fontSize: 15,
    fontFamily: "Georgia",
    marginTop: 70,
    color: "rgb(153, 255, 0)"
  },

  ti: {
    fontSize: 40,
      width: 500,
      padding: 20,
      backgroundColor: "#ff9100",
      marginTop: 20,
      borderRadius: 10,
      justifyContent: "space-between",
      gap: 10,
      
  },
  ds: {
    fontSize: 40,
      width: 500,
      padding: 20,
      backgroundColor: "#ff9100",
      marginTop: 20,
      borderRadius: 10,
      justifyContent: "space-between",
      gap: 10,
      
  },
  rd: {
    fontSize: 40,
      width: 500,
      padding: 20,
      backgroundColor: "#ff9100",
      marginTop: 20,
      borderRadius: 10,
      justifyContent: "space-between",
      gap: 10,
      
  },
  eng: {
    fontSize: 40,
      width: 500,
      padding: 20,
      backgroundColor: "#ff9100",
      marginTop: 20,
      borderRadius: 10,
      justifyContent: "space-between",
      gap: 10,
      
  },
  rdText:{
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Arial"
  },
  tiText:{
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Arial"
  },
  dsText:{
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Arial"
  },
  engText:{
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Arial"
  },
  maisCursos: {
    width: "100%",
    flex: 1,
    alignItems: "flex-end",
  },
  links: {
    padding: 20,
    marginTop: 20,
    marginRight: 210,
    justifyContent: "center",
    fontSize: 30,
    width: 200,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  }
});