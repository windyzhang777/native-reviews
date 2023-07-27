import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title, navigation }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={() => navigation.openDrawer()}
      />
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
