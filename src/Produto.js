import React from 'react';

/*
 * Componente que representa um produto individual.
 * Permite que o usuário adicione o produto ao carrinho.
 */

function Produto({ produto, adicionarProduto }) {
  return (
    <div>
      <p>{produto.nome} - R$ {produto.preco}</p>
      {/* Botão para adicionar o produto ao carrinho */}
      <button onClick={() => adicionarProduto(produto)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Produto;
