import { View, Text, StyleSheet, Image } from 'react-native';

export function SideBar2() {
    return (
        <View style={styles.background}>
            <Text style={styles.opcao}>Home</Text>
            <div style={styles.faixa}>
                <Text style={styles.pagina}>Conversor</Text>
            </div>
            <Text style={styles.opcao}>Histórico</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "#edb200",
        width: 207,
        height: 796,
        display: "flex",
        marginTop: 100
    },
    faixa: {
        backgroundColor: "#ffffff",
        width: 208,
        height: 70
    },
    pagina: {
        color: "#e98b1b",
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 17
    },
    opcao: {
        color: "#ffffff",
        fontSize: 37,
        fontWeight: "bold",
        marginLeft: 10
    }
  });