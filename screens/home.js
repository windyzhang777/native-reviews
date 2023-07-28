import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: 1,
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: 2,
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: 3,
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random() * 100;
    setReviews((prev) => [...prev, review]);
    setIsModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setIsModalOpen(true)}
      />
      <Modal visible={isModalOpen} animationType="slide">
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{
                ...styles.modalToggle,
                ...styles.modalClose,
              }}
              onPress={() => setIsModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ReviewDetails", item)
            }
          >
            <Card>
              <Text style={globalStyles.titleText}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
