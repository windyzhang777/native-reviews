import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

const RATINGS = {
  1: require("../assets/rating-1.png"),
  2: require("../assets/rating-2.png"),
  3: require("../assets/rating-3.png"),
  4: require("../assets/rating-4.png"),
  5: require("../assets/rating-5.png"),
};

export default function ReviewDetails({
  navigation,
  route: {
    params: { title, rating, body },
  },
}) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={RATINGS[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
