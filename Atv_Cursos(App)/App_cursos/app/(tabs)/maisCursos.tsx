import {StyleSheet, View, Text } from 'react-native'


const maisCursos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.texto}>
        <Text style={styles.texto}>Mais Cursos</Text>
    </View>
    <View style={styles.cursos}>
      <View>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
        <Text style={styles.textCursos}>Cursos de TI</Text>
      </View>
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f4f",
    alignItems: "center",
  },
  texto: {
    width: "100%",
    height: 150,
    textAlign: "center",
    fontSize: 70,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 30,
    backgroundColor: "#ffffff"
  },
  cursos:{
    flex: 1,
    justifyContent: "space-between",
    gap: 20,
    marginTop: 30,
  },
  textCursos: {
    color: "#ffffff",
    backgroundColor: "#ff9100",
    padding: 20,
    fontSize: 20,
  }
})


export default maisCursos