import {Link} from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
         <Text>HOME</Text>
         <Link href={"/page"}>SHOP</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    borderRadius: 25,
    padding: 20,
    backgroundColor: "#fff",
  }
})
