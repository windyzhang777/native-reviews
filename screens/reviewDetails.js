import { Text, View } from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({
  navigation,
  route: {
    params: { title, rating, body },
  },
}) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{title}</Text>
        <Text style={globalStyles.title}>{rating}</Text>
        <Text style={globalStyles.title}>{body}</Text>
      </Card>
    </View>
  );
}
