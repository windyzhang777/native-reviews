import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function StyledButton({
  title,
  handleSubmit,
}) {
  return (
    <TouchableOpacity onPress={handleSubmit}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
