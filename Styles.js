import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  shadow2xl: {
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  w1012: {
    width: "80%",
  },
  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  p10: {
    padding: 10,
  },
  darkBgWhite: {
    backgroundColor: "#fff",
  },
  mb10: {
    marginBottom: 10,
  },
  grid: {
    display: "grid",
  },
  gridCols12: {
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  colSpan1: {
    gridColumn: "span 1",
  },
  colSpan5: {
    gridColumn: "span 5",
  },
  colSpan6: {
    gridColumn: "span 6",
  },
  rounded: {
    borderRadius: 50,
  },
  textXl: {
    fontSize: 24,
  },
  fontBold: {
    fontWeight: "bold",
  },
  inputText: {
    width: "100%",
    height: 40,
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc"
  },
  btnPrimary: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#337ab7",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#337ab7",
    cursor: "pointer",
  },
});

export default styles