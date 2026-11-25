# Açaindo Delivery
Aplicativo de cardápio e pedidos para uma açaiteria. 
Torna possível consultar produtos, buscar pelo nome, adicionar itens ao carrinho, alterar quantidades e visualizar o resumo do pedido.

## Desenvolvedor
Emanuel Almeida Dantas

## Funcionalidades
- Tela inicial.
- Cardápio com imagens, descrições e preços.
- Busca de produtos pelo nome.
- Adição e remoção de produtos do carrinho.
- Alteração da quantidade de cada produto.
- Cálculo automático do subtotal e do total.
- Resumo e confirmação visual do pedido.

## Tecnologias e ferramentas
- **React Native** — construção das telas para dispositivos móveis.
- **Expo** — execução e configuração do aplicativo.
- **Expo Router** — navegação entre as telas.
- **TypeScript** — tipagem dos dados e componentes.
- **Git e GitHub** — controle de versões e armazenamento do projeto.
- **Visual Studio Code** — edição do código.
- **ChatGPT e Claude** — criação de imagens e auxílio na correção de bugs.

## Estrutura do projeto
```text
src/
├── app/
│   ├── _layout.tsx          # Navegação e acesso compartilhado ao carrinho
│   ├── index.tsx            # Tela inicial
│   ├── cardapio.tsx         # Cardápio e busca de produtos
│   ├── carrinho.tsx         # Itens selecionados e valor total
│   └── pedido.tsx           # Resumo e confirmação visual do pedido
├── components/
│   ├── ItemCarrinho.tsx     # Item exibido no carrinho
│   └── ProdutosCard.tsx     # Cartão de produto do cardápio
├── constants/
│   └── cores.ts             # Paleta de cores do aplicativo
├── context/
│   └── CarrinhoContext.tsx  # Estado e operações do carrinho
└── data/
    └── produtos.ts          # Tipo e lista de produtos

assets/
└── images/
    └── produtos/            # Logo e imagens dos produtos
```

## Tutorial de Instalação
1. Instale o [Node.js](https://nodejs.org/).
2. Abra um terminal na pasta do projeto.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o Expo:
   ```bash
   npx expo start
   ```
5. Para abrir o aplicativo no celular, escaneie o QR code com o Expo Go.

## Observação
A confirmação do pedido é apenas visual. O aplicativo ainda não envia pedidos para um servidor e não possui integração com banco de dados, pagamento ou serviço de entrega.
