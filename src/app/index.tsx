import { router } from 'expo-router'; //navegar entre telas 
import { StatusBar } from 'expo-status-bar'; //controle da barra de status do celular 
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; //componentes

//Define e exibe tela inicial
export default function Inicio() {
  return (
    //container principal da tela
    <View style={styles.container}>
      <StatusBar style="light" />
    {/*container cirular ao redor da logo*/}
      <View style={styles.logoContainer}>
    {/*Logo*/}   
        <Image
          source={require('../../assets/images/produtos/logo-acaindo.png')}
          style={styles.logoImagem}
          resizeMode="cover"
          accessibilityLabel="Logo da Açaíteria"
        />
      </View>
    {/*Nome do aplicativo*/}
      <Text style={styles.titulo}>Açaindo Delivery</Text>

    {/*mensagem de boas vindas*/}
      <Text style={styles.boasvindas}>
        Bem-vindo! Monte seu açaí do jeito que você gosta.
      </Text>
    {/*Imagem de destaque*/}
      <Image
        source={require('../../assets/images/produtos/acai-tradicional.png')}
        style={styles.destaque}
        resizeMode="cover"
        accessibilityLabel="Açaí tradicional"
      />
    {/*Botao pra abrir cardapio*/}
      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.8}
        onPress={() => router.push('/cardapio')}
      >
        <Text style={styles.textobotao}>Ver cardápio</Text>
      </TouchableOpacity>
    {/*Horario de funcionamento*/}
      <Text style={styles.rodape}>Delivery • [7:00 ás 18:00]</Text>
    </View>
  );
}


// aparência
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela disponível
    backgroundColor: '#4B1D6B', // cor de fundo
    alignItems: 'center', // centraliza os elementos
    justifyContent: 'center', // centraliza os elementos
    padding: 32, // espaço interno
    gap: 20, // espaço entre os elementos
  },
  logoContainer: {
    width: 96, // largura
    height: 96, // altura
    borderRadius: 48, // arredonda os cantos
    overflow: 'hidden', // esconde o que ultrapassar as bordas
    backgroundColor: '#E9D5F5', // cor de fundo
  },
  logoImagem: {
    width: '100%', // ocupa toda a largura do container
    height: '100%', // ocupa toda a altura do container
  },
  titulo: {
    fontSize: 40, // tamanho do texto
    fontWeight: 'bold', // deixa o texto em negrito
    color: '#FFFFFF', // cor do texto
  },
  boasvindas: {
    fontSize: 17, // tamanho do texto
    color: '#E9D5F5', // cor do texto
    textAlign: 'center', // centraliza o texto
    maxWidth: 280, // limita a largura máxima do texto
  },
  destaque: {
    width: 220, // largura
    height: 220, // altura
    borderRadius: 110, // arredonda os cantos
  },
  botao: {
    backgroundColor: '#E9D5F5', // cor de fundo
    paddingVertical: 16, // espaço interno vertical
    borderRadius: 14, // arredonda os cantos
    width: '100%', // ocupa toda a largura disponível
    maxWidth: 300, // limita a largura máxima do botão
    alignItems: 'center', // centraliza os elementos
  },
  textobotao: {
    color: '#4B1D6B', // cor do texto
    fontSize: 17, // tamanho do texto
    fontWeight: 'bold', // deixa o texto em negrito
  },
  rodape: {
    color: '#E9D5F5', // cor do texto
    fontSize: 13, // tamanho do texto
  },
});