import {Image, Text, View, StyleSheet} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/prancheta.png")} />
            <Text style={styles.titulo}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitulo}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: sizes.margin_horizontal,
        marginVertical: sizes.padding_big
    },
    titulo: {
        fontWeight: "bold",
        fontSize: sizes.size_title,
        color: colors.gray_500,
        marginTop: sizes.padding_medium
    },
    subtitulo: {
        fontSize: sizes.size_medium,
        color: colors.gray_500
    }
})