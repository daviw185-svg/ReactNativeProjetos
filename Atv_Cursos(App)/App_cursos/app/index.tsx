import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.inicio}>Bem-vindo ao SENAI Cursos</Text>
        <View style={styles.abertura}>
          <Text style={styles.texto}>
            O SENAI é uma instituição de ensino técnico e profissionalizante que oferece uma ampla variedade de cursos em diversas áreas, como tecnologia, indústria, saúde, entre outras. Com uma abordagem prática e voltada para o mercado de trabalho, o SENAI prepara os alunos para enfrentar os desafios do mundo profissional, proporcionando conhecimentos teóricos e habilidades práticas essenciais para o sucesso na carreira. Seja para quem busca uma formação técnica ou para aqueles que desejam aprimorar suas habilidades, o SENAI é uma excelente escolha para alcançar seus objetivos educacionais e profissionais.
          </Text>
        </View>
        <View style={styles.demo}>
          <Text style={styles.texto}>
            <Text>Tecnologia da Informação e Comunicação</Text>
            <Text>Análise e Desenvolvimento de Sistemas</Text>
            <Text>Rede de Computadores</Text>
            <Text>Engenharia</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#00c5f7",
    alignItems: "center",

  },
  inicio: {
    width: 1500,
    fontSize: 40,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "#ffffff",
  },

  abertura: {
    width: 1500,
    height: 200,
    backgroundColor: "#ff9100",
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
  },
  texto: {
    color: "#ffffff",
    fontSize: 25,
    fontFamily: "Arial",
  },
  demo: {
      padding: 20,
      backgroundColor: "#ff9100",
      marginTop: 20,
      borderRadius: 10,
      justifyContent: "space-between",
  }
});