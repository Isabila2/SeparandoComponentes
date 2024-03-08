import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";

{
  /* Chamando Background */
}
import LoginBackground from "../components/LoginImageBackground";

{
  /* Chamando Styles */
}
import styles from "../styles/StyleSheet";
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import LoginInput from "../components/LoginInput";
import LoginText from "../components/LoginText";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Chamando tudo o que está na página de LoginBackGround */}
      <LoginBackground>
        {/* Texto */}
        <LoginText />
        {/* Input */}
        <LoginInput />
        {/* Button */}
        <LoginButton />
        {/* Imagem */}
        <LoginImage />
      </LoginBackground>
    </View>
  );
}
