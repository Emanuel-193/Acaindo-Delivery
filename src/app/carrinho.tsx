import { router } from "expo-router"; // navegação entre telas
import {
  FlatList,
  StyleSheet,
  Text, 
  TouchableOpacity, 
  View, 
} from "react-native"; //componentes
import ItemCarrinho from "../components/ItemCarrinho"; // cartão de cada item do carrinho
import { cores } from "../constants/cores"; // cores
import { useCarrinho } from "../context/CarrinhoContext"; // dados e funções do carrinho

// Formata para duas casas decimais + troca ponto por virgula
const formatar = (valor: number) =>
  `R$ ${valor.toFixed(2).replace(".", ",")}`;

// Exibe carrinho
export default function Carrinho() {
  // Acessa os itens, e as alterações de totais no carrinho
  const { itens, alterarQuantidade, remover, total, totalItens } =
    useCarrinho();

  // Mostra uma mensagem e botao se o carrinho estiver vazio
  if (itens.length === 0) {
    return (
      <View style={styles.vazioContainer}>
        <Text style={styles.vazioTitulo}>Seu carrinho está vazio</Text>
        <Text style={styles.vazioTexto}>Que tal escolher um açaí?</Text>

        {/* Abre o cardápio*/}
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/cardapio")}
        >
          <Text style={styles.botaoTexto}>Ver cardápio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Se o carrinho tiver produtos mostra a lista de compra
  return (
    <View style={styles.container}>
      {/* Percorre os itens e cria um cartao */}
      <FlatList
        data={itens} // itens que estão no carrinho
        keyExtractor={(item) => String(item.produto.id)} // usa o ID do produto como identificador
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <ItemCarrinho
            produto={item.produto}
            quantidade={item.quantidade}
            onAumentar={() => alterarQuantidade(item.produto.id, 1)} // aumenta a quantidade em um
            onDiminuir={() => alterarQuantidade(item.produto.id, -1)} // diminui a quantidade em um
            onRemover={() => remover(item.produto.id)} // remove o produto do carrinho
          />
        )}
      />

      {/* Rodapé com a quantidade de itens, total e botao pra continuar*/}
      <View style={styles.rodape}>
        <View style={styles.linha}>
          <Text style={styles.rotulo}>Itens no carrinho</Text>
          <Text style={styles.rotulo}>{totalItens}</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.totalTexto}>{formatar(total)}</Text>
        </View>

        {/* Abre a tela de resumo e confirmação de pedido */}
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.8}
          onPress={() => router.push("/pedido")}
        >
          <Text style={styles.botaoTexto}>Finalizar pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Aparência
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela disponível
    backgroundColor: cores.lilasClaro, // cor de fundo
  },
  lista: {
    padding: 16, // espaço interno
  },
  rodape: {
    backgroundColor: cores.branco, // cor de fundo
    padding: 16, // espaço interno
    gap: 10, // espaço entre os elementos
  },
  linha: {
    flexDirection: "row", // organiza os elementos lado a lado
    justifyContent: "space-between", // separa os elementos para os lados
  },
  rotulo: {
    fontSize: 16, // tamanho do texto
    color: cores.texto, // cor do texto
  },
  totalTexto: {
    fontSize: 20, // tamanho do texto
    fontWeight: "bold", // deixa o texto em negrito
    color: cores.roxoEscuro, // cor do texto
  },
  botao: {
    backgroundColor: cores.roxo, // cor de fundo
    borderRadius: 14, // arredonda os cantos
    minHeight: 52, // altura mínima
    alignItems: "center", // centraliza
    justifyContent: "center", // centraliza
    paddingHorizontal: 24, // espaço interno horizontal
  },
  botaoTexto: {
    color: cores.branco, // cor do texto
    fontSize: 17, // tamanho do texto
    fontWeight: "bold", // deixa o texto em negrito
  },
  vazioContainer: {
    flex: 1, // ocupa toda a tela disponível
    backgroundColor: cores.lilasClaro, // cor de fundo
    alignItems: "center", // centraliza
    justifyContent: "center", // centraliza
    padding: 32, // espaço interno
    gap: 12, // espaço entre os elementos
  },
  vazioTitulo: {
    fontSize: 22, // tamanho do texto
    fontWeight: "bold", // deixa o texto em negrito
    color: cores.roxoEscuro, // cor do texto
  },
  vazioTexto: {
    fontSize: 16, // tamanho do texto
    color: "#5E4A72", // cor do texto
    marginBottom: 8, // espaço abaixo do elemento
  },
});