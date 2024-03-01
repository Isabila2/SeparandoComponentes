import { View, Image } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginImage() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")}
        style={[
          styles.logo,
          {
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 50,
            marginTop: -80,
          },
        ]}
        resizeMode="cover"
      />
    </View>
  );
}
