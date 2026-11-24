import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'; //componentes visuais
import { cores } from '@/constants/cores'; //cores
import type { Produto } from '@/data/produtos'; //produtos

//Dados e ação que o componente recebe, tudo apontando pro vazio
type Props = {
  produto: Produto;
  quantidade: number; //quantidade do produto no carrinho
  onAumentar: () => void; //aumenta quantidade
  onDiminuir: () => void; //diminui quantidade
  onRemover: () => void; //remove o produto
};

//recebe as funções
export default function ItemCarrinho({
  produto,
  quantidade,
  onAumentar,
  onDiminuir,
  onRemover,
}: Props) {
    return (
      //agrupoa as informações
    <View style={styles.card}>
      {/* Se o produto tiver imagem, mostra a imagem. */}
      {produto.imagem ? (
        <Image
          source={produto.imagem}
          style={styles.imagem}
          resizeMode="cover"
        />
      ) : (
        //se o prudoto tiver imagem, mostra ela
        <View style={[styles.imagem, styles.placeholder]}>
          <Text style={styles.placeholderTexto}>foto</Text>
        </View>
      )}
      {/* Mostra o preço do produto (unidade) */}
      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.unitario}>{formatar(produto.preco)} cada</Text>

      {/* Botoes de aumentar, diminuir a quantidade de produto */}
        <View style={styles.controles}>
          <TouchableOpacity
            style={styles.botaoQuantidade}
            onPress={onDiminuir}
            accessibilityRole="button"
            accessibilityLabel={`Diminuir ${produto.nome}`}
          >
            <Text style={styles.textoQuantidade}>−</Text>
          </TouchableOpacity>
          {/* Quantidade de produto no carrinho */}
          <Text style={styles.quantidade}>{quantidade}</Text>

          <TouchableOpacity
            style={styles.botaoQuantidade}
            onPress={onAumentar}
            accessibilityRole="button"
            accessibilityLabel={`Aumentar ${produto.nome}`}
          >
            <Text style={styles.textoQuantidade}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Area com subtotal (preço * quantidade) e opção de remover produto*/}
      <View style={styles.lateral}>
        <Text style={styles.subtotal}> 
          {formatar(produto.preco * quantidade)}
        </Text>

        <TouchableOpacity
          onPress={onRemover}
          accessibilityRole="button"
          accessibilityLabel={`Remover ${produto.nome}`}
        >
          <Text style={styles.remover}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}





//formata o valor pra duas casas e troca ponto por virgula
const formatar = (valor: number) => `R$ ${valor.toFixed(2).replace('.', ',')}`;


//aparencia
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // organiza os elementos lado a lado
    alignItems: 'center', // centraliza os elementos
    backgroundColor: cores.branco, // cor de fundo
    borderRadius: 16, // arredonda os cantos
    padding: 12, // espaço interno
    marginBottom: 12, // espaço abaixo do elemento
    gap: 12, // espaço entre os elementos
  },
  imagem: {
    width: 60, // largura
    height: 60, // altura
    borderRadius: 12, // arredonda os cantos
  },
  placeholder: {
    backgroundColor: cores.roxoEscuro, // cor de fundo
    alignItems: 'center', // centraliza os elementos
    justifyContent: 'center', // centraliza os elementos
  },
  placeholderTexto: {
    color: cores.lilas, // cor do texto
    fontSize: 11, // tamanho do texto
  },
  info: {
    flex: 1, // ocupa o espaço disponível
  },
  nome: {
    fontSize: 16, // tamanho do texto
    fontWeight: 'bold', // deixa o texto em negrito
    color: cores.roxoEscuro, // cor do texto
  },
  unitario: {
    fontSize: 12, // tamanho do texto
    color: '#5E4A72', // cor do texto
    marginBottom: 6, // espaço abaixo do elemento
  },
  controles: {
    flexDirection: 'row', // organiza os elementos lado a lado
    alignItems: 'center', // centraliza os elementos
    gap: 12, // espaço entre os elementos
  },
  botaoQuantidade: {
    width: 36, // largura
    height: 36, // altura
    borderRadius: 10, // arredonda os cantos
    backgroundColor: cores.lilas, // cor de fundo
    alignItems: 'center', // centraliza os elementos
    justifyContent: 'center', // centraliza os elementos
  },
  textoQuantidade: {
    fontSize: 20, // tamanho do texto
    fontWeight: 'bold', // deixa o texto em negrito
    color: cores.roxoEscuro, // cor do texto
  },
  quantidade: {
    minWidth: 20, // largura mínima
    textAlign: 'center', // centraliza o texto
    fontSize: 16, // tamanho do texto
    fontWeight: 'bold', // deixa o texto em negrito
    color: cores.roxoEscuro, // cor do texto
  },
  lateral: {
    alignItems: 'flex-end', // alinha os elementos à direita
    gap: 10, // espaço entre os elementos
  },
  subtotal: {
    fontSize: 16, // tamanho do texto
    fontWeight: 'bold', // deixa o texto em negrito
    color: cores.rosaEscuro, // cor do texto
  },
  remover: {
    fontSize: 13, // tamanho do texto
    color: cores.rosaEscuro, // cor do texto
    textDecorationLine: 'underline', // sublinha o texto
  },
});