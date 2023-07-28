import { Formik } from "formik";
import {
  Button,
  Text,
  TextInput,
  View,
} from "react-native";
import * as yup from "yup";
import { globalStyles } from "../styles/global";

const INITIAL_VALLUES = {
  title: "",
  rating: 0,
  body: "",
};

const REVIEW_SCHEMA = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(1)
    .max(5),
  // rating: yup
  //   .string()
  //   .required()
  //   .test(
  //     "is-num-1-5",
  //     "Rating must be a number 1 - 5",
  //     (val) => parseInt(val) < 6 && parseInt(val) > 0
  //   ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={INITIAL_VALLUES}
        validationSchema={REVIEW_SCHEMA}
        onSubmit={(values, { resetForm }) => {
          console.log(`values :`, values);
          addReview(values);
          resetForm();
        }}
      >
        {({
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <View>
            <TextInput
              onBlur={handleBlur("title")}
              onChangeText={handleChange("title")}
              placeholder="title"
              style={globalStyles.input}
              value={values.title}
            />
            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>
            <TextInput
              multiline
              onBlur={handleBlur("body")}
              onChangeText={handleChange("body")}
              placeholder="body"
              style={globalStyles.input}
              value={values.body}
            />
            <Text style={globalStyles.errorText}>
              {touched.body && errors.body}
            </Text>
            <TextInput
              keyboardType="numeric"
              onBlur={handleBlur("rating")}
              onChangeText={handleChange("rating")}
              placeholder="rating (1-5)"
              style={globalStyles.input}
              value={values.rating}
            />
            <Text style={globalStyles.errorText}>
              {touched.rating && errors.rating}
            </Text>
            <Button
              color="maroon"
              onPress={handleSubmit}
              title="submit"
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
