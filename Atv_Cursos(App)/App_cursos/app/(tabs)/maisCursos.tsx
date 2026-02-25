import {StyleSheet, View, Text } from 'react-native'
import React from 'react'


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
  },
  textCursos: {
    color: "#ffffff",
    
  }
})


export default maisCursos