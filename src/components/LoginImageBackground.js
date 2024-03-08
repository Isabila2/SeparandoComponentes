import { View, ImageBackground } from "react-native";

{
  /* Chamando Styles */
}
import styles from "../styles/StyleSheet";

export default function LoginBackground({ children }) {
  return (
      <ImageBackground
        source={require("../assets/images/fundo.png")}
        style={styles.img}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
  );
}
