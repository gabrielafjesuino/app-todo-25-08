import {StyleSheet, TextInput, View} from "react-native";
import sizes from "../design/sizes";
import colors from "../design/colors";

export default function Search() {
    return (
        <View style={styles.container}>
            <TextInput placeholder={"Busque por tarefas"} style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: sizes.margin_horizontal,
        marginVertical: sizes.size_medium,
    },
    input: {
        backgroundColor: colors.white,
        fontSize: sizes.size_medium,
        padding: sizes.padding_medium,
        color: colors.gray_500,
        borderRadius: sizes.border_radius,
        borderColor: colors.gray_330,
        borderWidth: 1,
        elevation: 3,
    }
})