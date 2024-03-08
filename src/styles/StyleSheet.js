import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    width: "100%",
  },
  inputName: {
    height: 60,
    width: 320,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
  login: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    marginTop: 130,
  },
  img: {
    flex: 1,
    
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    width: 300,
    backgroundColor: "#2a2b2b",
    borderWidth: 1,
    borderColor: "#2a2b2b",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
});

export default styles;
