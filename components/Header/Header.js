import { View, Text, StyleSheet, Image } from 'react-native';

export function Header() {
    return (
        <View style={styles.background}>
            <Image style={styles.menu} source={require("../../assets/menu.png")}/>
            <Text style={styles.title}>Cotação</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "#ffca2c",
        width: 414,
        height: 100,
        display: "flex"
    },
    menu: {
        marginLeft: 30,
        marginTop: 30,
        width: 40,
        height: 40
    },
    title: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 50,
        marginTop: -59,
        textAlign: "center",
        textShadowColor: "#e98b1b",
        textShadowRadius: 1,
        textShadowOffset: { width: -4, height: 0 },
    }
  });