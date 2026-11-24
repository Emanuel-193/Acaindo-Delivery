import type { ImageSourcePropType } from 'react-native';

// Tipo dos dados de cada produto
export type Produto = {
  id: number; //id  produto
  nome: string; //nome do produto
  descricao: string; //descrição do produto
  preco: number; //preço do produto
  imagem?: ImageSourcePropType; //Imagem, a interrogação torna ela opcional
};

// Produtos do cardápio
export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Açaí",
    descricao: "Açaí Padrão, sem adições",
    preco: 10,
    imagem: require('../../assets/images/produtos/acai-tradicional (1).png'),
  },
  {
    id: 2,
    nome: "Açaí + Ninho",
    descricao: "Açaí com Leite Ninho",
    preco: 12,
    imagem: require('../../assets/images/produtos/acai-ninho (1).png'),
  },
  {
    id: 3,
    nome: "Açaí + Morango",
    descricao: "Açaí com Morango",
    preco: 12,
    imagem: require('../../assets/images/produtos/acai-morango (1).png'),
  },
  {
    id: 4,
    nome: "Açaí + Maracuja",
    descricao: "Açaí com Maracuja",
    preco: 12,
    imagem: require('../../assets/images/produtos/acai-maracuja (1).png'),
  },
  {
    id: 5,
    nome: "Ninho + Morango",
    descricao: "Açai com Ninho e Morango",
    preco: 14,
    imagem: require('../../assets/images/produtos/ninho-morango (1).png'),
  },
  {
    id: 6,
    nome: "Sorvete de Ovomaltine",
    descricao: "Sorvete de Ovomaltine",
    preco: 10,
    imagem: require('../../assets/images/produtos/sorvete-ovomaltine (1).png'),
  },
  {
    id: 7,
    nome: "Açai + Ovomaltine",
    descricao: "Açai com Ovomaltine",
    preco: 14,
    imagem: require('../../assets/images/produtos/acai-ovomaltine (1).png'),
  },
  {
    id: 8,
    nome: "Adicional 1",
    descricao: "Porção de amendoim",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-amendoim (1).png'),
  },
  {
    id: 9,
    nome: "Adicional 2",
    descricao: "Bolinhas de chocolate",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-bolinhas-chocolate (1).png'),
  },
  {
    id: 10,
    nome: "Adicional 3",
    descricao: "Porção de jujubas",
    preco: 2,
    imagem: require('../../assets/images/produtos/adicional-jujubas (1).png'),
  },
];