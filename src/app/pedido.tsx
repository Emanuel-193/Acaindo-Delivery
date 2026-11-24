import { useState } from 'react'; //controla se o pedido foi confirmado
import {
  ScrollView,
  StyleSheet,
  Text, 
  TouchableOpacity, 
  View,
} from 'react-native'; //componentes
import { router } from 'expo-router'; //navegar entre telas
import { useCarrinho } from '../context/CarrinhoContext'; //acessa o carrinho
import { cores } from '../constants/cores'; //cores 

// Formata para duas casas decimais + troca ponto por virgula
const formatar = (valor: number) =>
  `R$ ${valor.toFixed(2).replace('.', ',')}`;

//tela de pedido
export default function Pedido() {
  //acessa os itens, total e função para limpar o carrinho
  const { itens, total, totalItens, limpar } = useCarrinho();

  //guarda se o pedido foi confirmado
  const [confirmado, setConfirmado] = useState(false);

  //limpa o carrinho e volta para o início
  function voltarAoInicio() {
    limpar();
    router.replace('/');
  }

  //se não tiver itens mostra uma mensagem e o botão docardápio
  if (itens.length === 0) {
    return (
      <View style={styles.centro}>
        <Text style={styles.titulo}>Nenhum pedido por aqui</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.replace('/cardapio')}
        >
          <Text style={styles.botaoTexto}>Ver cardápio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  //mostra o resumo da compra e a confirmação do pedido
  return (
    <View style={styles.container}>
      {/*permite rolar o resumo caso ele não caiba na tela*/}
      <ScrollView contentContainerStyle={styles.conteudo}>
        {/*aparece depois que o pedido é confirmado*/}
        {confirmado && (
          <View style={styles.sucesso}>
            <View style={styles.check}>
              <Text style={styles.checkTexto}>✓</Text>
            </View>
            <Text style={styles.titulo}>Pedido confirmado!</Text>
            <Text style={styles.mensagem}>
              Obrigado! Seu açaí já está sendo preparado.
            </Text>
          </View>
        )}

        {/*resumo dos produtos e dos preços*/}
        <View style={styles.resumo}>
          <Text style={styles.resumoTitulo}>Resumo da compra</Text>

          {/*mostra cada produto do carrinho*/}
          {itens.map((item) => (
            <View key={item.produto.id} style={styles.linha}>
              <Text style={styles.linhaTexto}>
                {item.quantidade}x {item.produto.nome}
              </Text>
              <Text style={styles.linhaTexto}>
                {formatar(item.produto.preco * item.quantidade)}
              </Text>
            </View>
          ))}

          {/*separa os produtos do valor total*/}
          <View style={styles.divisor} />

          {/*mostra a quantidade de itens e o total da compra*/}
          <View style={styles.linha}>
            <Text style={styles.totalTexto}>
              Total ({totalItens} {totalItens === 1 ? 'item' : 'itens'})
            </Text>
            <Text style={styles.totalTexto}>{formatar(total)}</Text>
          </View>
        </View>
      </ScrollView>

      {/*botão que muda depois da confirmação*/}
      <View style={styles.rodape}>
        {confirmado ? (
          //depois de confirmar, volta ao início e limpa o carrinho
          <TouchableOpacity
            style={styles.botao}
            onPress={voltarAoInicio}
          >
            <Text style={styles.botaoTexto}>Voltar ao início</Text>
          </TouchableOpacity>
        ) : (
          //altera o estado para mostrar a confirmação na tela
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setConfirmado(true)}
          >
            <Text style={styles.botaoTexto}>Confirmar pedido</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

//aparência
const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa a tela toda
    backgroundColor: cores.lilasClaro, //cor de fundo
  },
  conteudo: {
    padding: 16, //espaço interno
    gap: 16, //espaço entre os elementos
  },
  centro: {
    flex: 1, //ocupa a tela toda
    backgroundColor: cores.lilasClaro, //cor de fundo
    alignItems: 'center', //centraliza
    justifyContent: 'center', //centraliza
    padding: 32, //espaço interno
    gap: 16, //espaço entre os elementos
  },
  sucesso: {
    alignItems: 'center', //centraliza
    gap: 10, //espaço entre os elementos
    paddingVertical: 16, //espaço interno vertical
  },
  check: {
    width: 84, //largura
    height: 84, //altura
    borderRadius: 42, //arredonda os cantos
    backgroundColor: cores.verde, //cor de fundo
    alignItems: 'center', //centraliza
    justifyContent: 'center', //centraliza
  },
  checkTexto: {
    color: cores.branco, //cor do texto
    fontSize: 44, //tamanho do texto
    fontWeight: 'bold', //deixa em negrito
  },
  titulo: {
    fontSize: 26, //tamanho do texto
    fontWeight: 'bold', //deixa em negrito
    color: cores.roxoEscuro, //cor do texto
    textAlign: 'center', //centraliza o texto
  },
  mensagem: {
    fontSize: 15, //tamanho do texto
    color: '#5E4A72', //cor do texto
    textAlign: 'center', //centraliza o texto
  },
  resumo: {
    backgroundColor: cores.branco, //cor de fundo
    borderRadius: 16, //arredonda os cantos
    padding: 16, //espaço interno
    gap: 10, //espaço entre os elementos
  },
  resumoTitulo: {
    fontSize: 17, //tamanho do texto
    fontWeight: 'bold', //deixa em negrito
    color: cores.roxoEscuro, //cor do texto
  },
  linha: {
    flexDirection: 'row', //coloca lado a lado
    justifyContent: 'space-between', //separa para os lados
    gap: 12, //espaço entre os elementos
  },
  linhaTexto: {
    fontSize: 16, //tamanho do texto
    color: cores.texto, //cor do texto
    flexShrink: 1, //permite o texto diminuir para caber
  },
  divisor: {
    height: 1, //altura da linha
    backgroundColor: '#E2CFF5', //cor de fundo
  },
  totalTexto: {
    fontSize: 18, //tamanho do texto
    fontWeight: 'bold', //deixa em negrito
    color: cores.roxoEscuro, //cor do texto
  },
  rodape: {
    backgroundColor: cores.branco, //cor de fundo
    padding: 16, //espaço interno
  },
  botao: {
    backgroundColor: cores.roxo, //cor de fundo
    borderRadius: 14, //arredonda os cantos
    minHeight: 52, //altura mínima
    alignItems: 'center', //centraliza
    justifyContent: 'center', //centraliza
    paddingHorizontal: 24, //espaço interno horizontal
  },
  botaoTexto: {
    color: cores.branco, //cor do texto
    fontSize: 17, //tamanho do texto
    fontWeight: 'bold', //deixa em negrito
  },
});