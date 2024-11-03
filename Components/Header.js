import { StyleSheet, View, StatusBar, Text } from "react-native";
import { Surface } from "react-native-paper";
export default function Header() {
  const styles = StyleSheet.create({
    content: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "max-content",
      padding: 5,
    },
    surface: {
      backgroundColor: "#fe6f3e",
      flexDirection: "Column",
      alignItems: "center",
      justifyContent: "center",
      height: 50 + StatusBar.currentHeight,
      paddingTop: StatusBar.currentHeight,
    },
  });

  return (
    <Surface style={styles.surface} elevation={0}>
      <View style={styles.content}>
        <Text>MTG Card Generator</Text>
      </View>
    </Surface>
  );
}
