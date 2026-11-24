import { Stack } from "expo-router"; //cria a navegação entre telas
import { CarrinhoProvider } from "@/context/CarrinhoContext"; //compartilha os carrinhos entre as telas

export default function Layout() {
  return (
    //O Carrinho está mais fora para todas as telas poderem acessar ele, o resto é o "caminho" das telas
    <CarrinhoProvider> 
      <Stack>
        
        <Stack.Screen name="index" options={{ headerShown: false }} />
        
        <Stack.Screen name="cardapio" options={{ title: "Cardápio" }} />
       
        <Stack.Screen name="carrinho" options={{ title: "Carrinho" }} />
       
        <Stack.Screen name="pedido" options={{ title: "Pedido" }} />

      </Stack>
    </CarrinhoProvider>
  );
}
