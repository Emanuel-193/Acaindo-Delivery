import { createContext, useContext, useState } from 'react'; //funções pro carrinho
import type { ReactNode } from 'react'; //tipo pra respresentar elementos filjo
import type { Produto } from '../data/produtos'; //produtos

//tipo do carrinho
type ItemCarrinho = {
  produto: Produto;
  quantidade: number;
};

//tipo + funções do carrinho
type CarrinhoContextData = {
  itens: ItemCarrinho[]; //produtos no carrinho
  adicionar: (produto: Produto) => void; //adiciona produto
  remover: (id: number) => void; //remove produto
  alterarQuantidade: (id: number, variacao: number) => void; //altera quantidade
  limpar: () => void; //limpa
  total: number; //total
  totalItens: number; //total de itens
};

//cria contexto e dados que serão compartilhados pelo carrinho
const CarrinhoContext = createContext<CarrinhoContextData | undefined>(undefined);


//compartilha os dados do carrinho com os componentes filhos
export function CarrinhoProvider({ children }: { children: ReactNode }) {
  //cria o estado que guarda os itens do carrinho
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  //adiciona um produto ao carrinho
  function adicionar(produto: Produto) {
    setItens((atuais) => {
      //procura o produto pelo id para saber se ele já está no carrinho
      const itemExistente = atuais.find(
        (item) => item.produto.id === produto.id
      );

//se o produto ja existe aumenta a quantidade
      if (itemExistente) {
        return atuais.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
//se não existe adiciona com quantidade 1
      return [...atuais, { produto, quantidade: 1 }];
    });
  }

  //remove o produto através do ID
  function remover(id: number) {
    setItens((atuais) =>
      atuais.filter((item) => item.produto.id !== id)
    );
  }

  //altera a quantidade do produto recebida
  function alterarQuantidade(id: number, variacao: number) {
    setItens((atuais) =>
      atuais
    //encontra um produto e soma a qiamtodade atual
        .map((item) =>
          item.produto.id === id
            ? { ...item, quantidade: item.quantidade + variacao }
            : item
        )
        //remove do carrinho produtos com quantidade 
        .filter((item) => item.quantidade > 0)
    );
  }


//esvazia o carrinho

  function limpar() {
    setItens([]);
  }

//soma preço * quantidade dos produtos
  const total = itens.reduce(
    (soma, item) => soma + item.produto.preco * item.quantidade,
    0
  );

//soma as quantidades pra saber o total de de unidades no carrinho
  const totalItens = itens.reduce(
    (soma, item) => soma + item.quantidade,
    0
  );


  return (
//disponibiliza os dados e funções pros componentes filho
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionar,
        remover,
        alterarQuantidade,
        limpar,
        total,
        totalItens,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

//permite acessar o carrinho em outros componentes
export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);

  if (!contexto) {
    throw new Error('useCarrinho precisa estar dentro de CarrinhoProvider.');
  }

  return contexto;
}