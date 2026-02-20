import { Link } from 'expo-router'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Reacher = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.snp}> Jack Reacher é um ex-major do Exército dos EUA que se tornou um andarilho pelo país, se envolvendo em investigações e confrontos com operações criminosas. </Text>
        <Link href={"./elenco"} style={styles.elenco}> Ver Elenco </Link>  
        <Link href={"./episodio"} style={styles.elenco}> Ver Primeiro Episódio </Link>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black",
    },
    snp: {
        marginLeft: 20,
        padding: 20,
        width: 1200,

        color: "white",
        fontSize: 40,
        fontFamily: "Trebuchet MS",
        marginTop: 50,
        backgroundColor: "rgb(226, 107, 10)",
        borderRadius: 10,
    },
    elenco: {
        width: 200,
        fontSize: 30,
        marginLeft: 20,
        padding: 15,
        marginTop: 20,
        fontWeight: "bold",
        backgroundColor: "rgb(10, 226, 125)",
        color: "white",
        borderRadius: 8,
    },
    episodio: {
        

    }
})
export default Reacher
