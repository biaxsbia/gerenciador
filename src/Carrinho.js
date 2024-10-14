import React from 'react';

/*
 * Componente responsável por exibir o carrinho de compras.
 * Permite visualizar os produtos, editar a quantidade e remover produtos.
 */
function Carrinho({ carrinho, editarQuantidade, removerProduto, total }) {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {/* Mapeando e exibindo os produtos no carrinho */}
          {carrinho.map((item) => (
            <li key={item.id}>
              {item.nome} - R$ {item.preco} - {item.quantidade} un.
              {/* Contêiner para os botões e o campo de quantidade */}
              <div className="quantidade-container">
                <button onClick={() => editarQuantidade(item.id, item.quantidade - 1)} disabled={item.quantidade <= 1}>-</button>
                <input
                  type="number"
                  value={item.quantidade}
                  readOnly // O campo é somente leitura, pois a edição será feita pelos botões
                />
                <button onClick={() => editarQuantidade(item.id, item.quantidade + 1)}>+</button>
              </div>
              <button className="remove" onClick={() => removerProduto(item.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Exibição do valor total do carrinho */}
      <h2 className="total">Total: R$ {total}</h2>
    </div>
  );
}

export default Carrinho;




