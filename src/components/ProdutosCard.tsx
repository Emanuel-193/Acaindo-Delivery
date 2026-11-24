import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; //componentes visuais
import { cores } from "../constants/cores"; //cores
import type { Produto } from "../data/produtos"; //Produtos

//Dados e ação que o componente recebe
type Props = {
  produto: Produto;
  onAdicionar: (produto: Produto) => void;
};

export default function ProdutoCard({ produto, onAdicionar }: Props) {
  return (
    <View style={styles.card}> 
    {/*Mostra a imagem do produto*/}
      {produto.imagem ? (
  <Image
    source={produto.imagem}
    style={styles.imagem}
    resizeMode="cover"
  />
) : (
  <View style={[styles.imagem, styles.placeholder]}>
    <Text style={styles.placeholderTexto}>foto</Text>
  </View>
)}
      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>
        <Text style={styles.preco}>
          R$ {produto.preco.toFixed(2).replace(".", ",")}
        </Text>
      </View>

      {/* Envia o produto pra função do Props*/}
      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.8}
        onPress={() => onAdicionar(produto)}
        accessibilityLabel={`Adicionar ${produto.nome}`}
      >
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>
    </View>
    
  );
}

//aparencia
const styles = StyleSheet.create({
  card: {
    flexDirection: "row", //tudo lado a lado
    alignItems: "center", //centraliza
    backgroundColor: cores.branco, //cor de fundo
    borderRadius: 12, //Arredonda os cantos
    padding: 16, //cria espaço entre o conteudo e as bordas
    marginBottom: 12, //Separa os cartoes
    gap: 12, //Cria espaço entre as imagens, informações e botoes
  },
  info: {
    flex: 1, //Ocupa o espaço entre a imagem e botao
  },
  nome: {
    fontSize: 18, //tamanho do nome
    fontWeight: "bold", //nome em negrito
    color: cores.roxoEscuro, //cor do nome
  },
  descricao: {
    fontSize: 14, //tamanho
    color: "#5E4A72", //cor
    marginTop: 4, //espaço entre nome e descrição
  },
  preco: {
    fontSize: 16, //tamanho do preço
    fontWeight: "bold", //negrito
    color: cores.rosaEscuro, //cor do preço
    marginTop: 8, //espaço entre o preço e a descrição
  },
  botao: {
    backgroundColor: cores.roxo, //cor do botao
    paddingVertical: 10, //espaço interno no botao (vertical)
    paddingHorizontal: 12, //espaço interno no botao (horizontal)
    borderRadius: 10,
  },
  textoBotao: {
    color: cores.branco, //cor do texto do botao
    fontWeight: "bold", //negrito
  },
  imagem: {
    width: 76, //largura
    height: 76, //altura
    borderRadius: 14, //arredonda os cantos
  },
  placeholder: {
    backgroundColor: "#3B1060", //fundo do espaço sem imagem
    alignItems: "center", //centraliza na horizontal
    justifyContent: "center", //centraliza na vertical
  },
  placeholderTexto: {
    color: cores.lilas, //cor do texto Placeholder
    fontSize: 12, //fonte do texto Placeholder
  },
});
