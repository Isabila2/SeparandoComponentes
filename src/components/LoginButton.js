import { View, Text, Pressable } from "react-native";
import styles from "../styles/StyleSheet";
import { TouchableOpacity } from "react-native-web";

export default function LoginButton() {
  pressButton = () => {
    alert("O botão não funciona ainda...");
  };

  return (
        <TouchableOpacity style={styles.btn} onPress={pressButton}>
          <Text style={styles.textButton}>Click here</Text>
        </TouchableOpacity>
  );
}
