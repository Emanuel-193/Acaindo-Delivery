import type { ImageSourcePropType } from 'react-native';

// Tipo dos dados de cada produto
export type Produto = {
  id: number; // id do produto
  nome: string; // nome do produto
  descricao: string; // descrição do produto
  preco: number; // preço do produto
  imagem?: ImageSourcePropType; // imagem opcional do produto
};

// Produtos do cardápio
export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Açaí",
    descricao: "Açaí Padrão, sem adições",
    preco: 10,
    imagem: require('../../assets/images/produtos/acai-tradicional.png'),
  },
  {
    id: 2,
    nome: "Açaí + Ninho",
    descricao: "Açaí com Leite Ninho",
    preco: 12,
    imagem: require('../../assets/images/produtos/acai-ninho.png'),
  },
  {
    id: 3,
    nome: "Açaí + Morango",
    descricao: "Açaí com Morango",
    preco: 12,
    imagem: require('../../assets/images/produtos/acai-morango.png'),
  },
  {
    id: 4,
    nome: "Açaí + Maracuja",
    descricao: "Açaí com Maracuja",
    preco: 12,
    imagem: require('../../assets/images/produtos/acai-maracuja.png'),
  },
  {
    id: 5,
    nome: "Açaí + Abacaxi",
    descricao: "Açaí com abacaxi",
    preco: 12,
    imagem: require('../../assets/images/produtos/acai-abacaxi.png'),
  },
  {
    id: 6,
    nome: "Ninho + Morango",
    descricao: "Açai com Ninho e Morango",
    preco: 14,
    imagem: require('../../assets/images/produtos/ninho-morango.png'),
  },
  {
    id: 7,
    nome: "Ninho + Maracujá",
    descricao: "Creme de ninho com maracujá",
    preco: 14,
    imagem: require('../../assets/images/produtos/ninho-maracuja.png'),
  },
  {
    id: 8,
    nome: "Sorvete de Ovomaltine",
    descricao: "Sorvete de Ovomaltine",
    preco: 10,
    imagem: require('../../assets/images/produtos/sorvete-ovomaltine.png'),
  },
  {
    id: 9,
    nome: "Açai + Ovomaltine",
    descricao: "Açai com Ovomaltine",
    preco: 14,
    imagem: require('../../assets/images/produtos/acai-ovomaltine.png'),
  },
  {
    id: 10,
    nome: "Adicional 1",
    descricao: "Porção de amendoim",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-amendoim.png'),
  },
  {
    id: 11,
    nome: "Adicional 2",
    descricao: "Bolinhas de chocolate",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-bolinhas-chocolate.png'),
  },
  {
    id: 12,
    nome: "Adicional 3",
    descricao: "Porção de jujubas",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-jujubas.png'),
  },
  {
    id: 13,
    nome: "Adicional 4",
    descricao: "Porção de granola",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-granola.png'),
  },
  {
    id: 14,
    nome: "Adicional 5",
    descricao: "Porção de confete",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-confete.png'),
  },
  {
    id: 15,
    nome: "Adicional 6",
    descricao: "Porção de cereal",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-cereal.png'),
  },
];