import { View, ImageBackground } from "react-native";

{
  /* Chamando Styles */
}
import styles from "../styles/StyleSheet";

export default function LoginBackground({ children }) {
  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground
        source={require("../assets/images/fundo.png")}
        style={styles.img}
      >
        {children}
      </ImageBackground>
    </View>
  );
}
