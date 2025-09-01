import {Text, View, StyleSheet, ScrollView, Alert} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import sizes from "../design/sizes";
import colors from "../design/colors";
import EmptyList from "../components/EmptyList";
import Search from "../components/Search";
import Card from "../components/Card";
import {useEffect, useState} from "react";

export default function HomeScreen() {
    const [lista, setLista] = useState([])
    const [totalCriado, setTotalCriado] = useState(0)
    const [totalConcluido, setTotalConcluido] = useState(0)
    const [textCadastro, setTextCadastro] = useState("")
    const [filtroBusca, setFiltroBusca] = useState("")

    useEffect(() => {
        var totalConcluidos = lista.filter(function (item) {
            return item.concluido
        })

        var totalNaoConcluidos = lista.filter(function (item) {
            if (item.concluido === true) {
                return false
            }

            return true
        })

        setTotalConcluido(totalConcluidos.length)
        setTotalCriado(totalNaoConcluidos.length)

    }, [lista]);

    function cadastrarTarefa() {
        var listaAux = [...lista]

        if (textCadastro.trim() === "") {
            Alert.alert("Impossível cadastrar tarefas vazias!")
            return false;
        }

        var jaExiste = listaAux.find(function (item) {
            if (item.titulo.toLowerCase() === textCadastro.toLowerCase()) {
                return true
            }
            return false
        })

        if (jaExiste) {
            Alert.alert("Essa tarefa já existe!")
            return false;
        }

        listaAux.push({
            titulo: textCadastro,
            concluido: false
        })

        setTextCadastro("")
        setLista(listaAux)
    }

    function concluirTarefa(index) {
        var listaAux = [...lista]
        listaAux[index].concluido = !listaAux[index].concluido;

        setLista(listaAux)
    }

    function excluirTarefa(index) {
        var listaAux = [...lista]
        listaAux.splice(index, 1)

        setLista(listaAux)
    }

    const listaFiltrada = lista.filter(item =>
        item.titulo.toLowerCase().includes(filtroBusca.toLowerCase())
    );

    return (
        <ScrollView>
            <Header />
            <FormCadastro fnCadastrar={cadastrarTarefa} texto={textCadastro} setTexto={setTextCadastro} />

            <View style={styles.containerBotoes}>
                <BtnCont titulo={"Tarefas Criadas"} numero={totalCriado} />
                <BtnCont titulo={"Concluídas"} numero={totalConcluido} isGreen={true} />
            </View>

            <Search
                textoBusca={filtroBusca}
                aoDigitar ={setFiltroBusca}
            />

            {listaFiltrada.length === 0 && <EmptyList />}

            {listaFiltrada
                .sort(function (a, b) {
                    return a.concluido - b.concluido
                })
                .map(function (item, index) {
                return (
                    <Card key={index}
                          texto={item.titulo}
                          ativo={item.concluido}
                          fnConcluir={() => concluirTarefa(index)}
                          fnExcluir={() => excluirTarefa(index)}
                    />
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerBotoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: sizes.margin_horizontal,
        marginTop: sizes.padding_large,
        paddingBottom: sizes.padding_large,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray_330
    }
})