import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <p>Esta es una lista.</p>
      <ul>
        <li>¡Soy un elemento!</li>
        <li>¡Soy un elemento!</li>
        <li>¡Soy un elemento!</li>
      </ul>
    </div>
  );
};

export default ItemListContainer;