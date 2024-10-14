import React, { useState } from 'react';
import Produto from './Produto'; // Importando o componente Produto
import Carrinho from './Carrinho'; // Importando o componente Carrinho
import './App.css'; // Importa o arquivo de estilos para aplicar ao layout

/*
 * Nome: Beatriz Oliveira de Sousa
 * Matrícula: 2021200247
 * Disciplina: DESENVOLVIMENTO DE APLICAÇÕES MÓVEIS
 * Componente principal da aplicação. Gerencia a lista de produtos e o carrinho de compras.
 */

function App() {
  // Produtos disponíveis (predefinidos)
  const produtos = [
    { id: 1, nome: "Produto 1", preco: 10 },
    { id: 2, nome: "Produto 2", preco: 25 },
    { id: 3, nome: "Produto 3", preco: 34 },
  ];

  // Estado que armazena os produtos no carrinho
  const [carrinho, setCarrinho] = useState([]);

  /*
   * Função para adicionar produtos ao carrinho.
   * Se o produto já existe no carrinho, incrementa a quantidade.
   * Caso contrário, adiciona o produto com quantidade 1.
   */
  const adicionarProduto = (produto) => {
    const produtoExistente = carrinho.find((item) => item.id === produto.id);
    if (produtoExistente) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...produtoExistente, quantidade: produtoExistente.quantidade + 1 }
            : item
        )
      );
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  /*
   * Função para editar a quantidade de um produto no carrinho.
   * Atualiza a quantidade diretamente no estado do carrinho.
   */
  const editarQuantidade = (id, novaQuantidade) => {
    setCarrinho(
      carrinho.map((item) =>
        item.id === id ? { ...item, quantidade: novaQuantidade } : item
      )
    );
  };

  /*
   * Função para remover um produto do carrinho.
   * Filtra o carrinho removendo o item correspondente ao id fornecido.
   */
  const removerProduto = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  // Calcula o total dos produtos no carrinho com base na quantidade e no preço
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="App">
      <h1>Gerenciador de Carrinho de Compras</h1>

      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Produto produto={produto} adicionarProduto={adicionarProduto} />
          </li>
        ))}
      </ul>

      <Carrinho
        carrinho={carrinho}
        editarQuantidade={editarQuantidade}
        removerProduto={removerProduto}
        total={total}
      />
    </div>
  );
}

export default App;