import { router } from "expo-router"; // navegação entre telas
import { useState } from "react"; // estado da busca
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"; //visual
import ProdutoCard from "../components/ProdutosCard"; //card produto
import { cores } from "../constants/cores"; //cores
import { useCarrinho } from "../context/CarrinhoContext"; //dados do carrinho
import { produtos } from "../data/produtos"; //produtos do cadapio

//facilita a busca na barra de pesquisa do cardapio
const normalizar = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

//define e exibe a tela do cardapio
export default function Cardapio() {
  const [busca, setBusca] = useState(""); //guarda o texto da busca
  const { adicionar, total, totalItens } = useCarrinho(); //acessa carrinho

//mantem produtos correspondentes ao texto buscado
  const resultados = produtos.filter((produto) =>
    normalizar(produto.nome).includes(normalizar(busca)),
  );

  return (
    // Container principal da tela.
    <View style={styles.container}>
      {/* Campo onde a pessoa digita o nome do produto. */}
      <View style={styles.busca}>
        <TextInput
          style={styles.input}
          placeholder="Buscar produto pelo nome"
          placeholderTextColor={cores.roxoEscuro}
          value={busca}
          onChangeText={setBusca} // atualiza a busca enquanto a pessoa digita
        />
      </View>

      {/* Lista os produtos*/}
      <FlatList
        style={{ flex: 1 }} // ocupa a tela
        data={resultados} // produtos que correspondem à busca
        keyExtractor={(produto) => String(produto.id)} // usa o ID para identificar cada produto
        renderItem={({ item }) => (
          // Exibe cada produto e passa a função pra adicionar no carrinho.
          <ProdutoCard produto={item} onAdicionar={adicionar} />
        )}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          // Mensagem exibida quando nenhum produto corresponde à busca.
          <Text style={styles.vazio}>Nenhum produto encontrado.</Text>
        }
      />


      {totalItens > 0 && (
        <TouchableOpacity
          style={styles.barra}
          activeOpacity={0.8}
          onPress={() => router.push("/carrinho")}
        >
          <Text style={styles.barraTexto}>
            Ver carrinho • {totalItens} {totalItens === 1 ? "item" : "itens"} •{" "}
              {/* Duas casas decimais + troca ponto por virgula*/}
            R$ {total.toFixed(2).replace(".", ",")} 
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// Aparência
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela disponível
    backgroundColor: cores.lilasClaro, // cor de fundo
  },
  busca: {
    backgroundColor: cores.branco, // cor de fundo
    borderRadius: 14, // arredonda os cantos
    margin: 16, // espaço ao redor do elemento
    marginBottom: 8, // espaço abaixo do elemento
    paddingHorizontal: 14, // espaço interno horizontal
    minHeight: 48, // altura mínima
    justifyContent: "center", // centraliza
  },
  input: {
    flex: 1, // ocupa o espaço disponível
    fontSize: 15, // tamanho do texto
    color: cores.texto, // cor do texto
  },
  lista: {
    padding: 16, // espaço interno
    paddingTop: 8, // espaço interno no topo
  },
  vazio: {
    textAlign: "center", // centraliza o texto
    color: cores.roxoEscuro, // cor do texto
    marginTop: 32, // espaço acima do elemento
    fontSize: 16, // tamanho do texto
  },
  barra: {
    backgroundColor: cores.roxo, // cor de fundo
    margin: 16, // espaço ao redor do elemento
    borderRadius: 14, // arredonda os cantos
    minHeight: 52, // altura mínima
    alignItems: "center", // centraliza
    justifyContent: "center", // centraliza
  },
  barraTexto: {
    color: cores.branco, // cor do texto
    fontSize: 17, // tamanho do texto
    fontWeight: "bold", // deixa o texto em negrito
  },
});