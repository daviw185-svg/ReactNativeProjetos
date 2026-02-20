import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.titulo}>Se você está procurando experimentar algo novo como nunca já foi visto antes? Então conheça: </Text>
      <Link href={"./reacher"} style={styles.link}> Reacher</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
  },
  titulo: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30,
    color: "rgb(226, 125, 10)",
  },
  link: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: 50,
    fontFamily: "Trebuchet MS",
    marginTop: 20,
  }

})
