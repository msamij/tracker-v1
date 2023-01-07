import ItemGrid from '@ItemContainer/ItemGrid/ItemGrid';
import React from 'react';
import './ItemContainer.css';

function ItemContainer() {
  return (
    <div className="item-container">
      <ItemGrid btnText="Add Income" color="blue" headingText="Incomes" itemColor="blue" />
      <ItemGrid btnText="Add Income Categories" color="orange" headingText="Categories" itemColor="orange" />
    </div>
  );
}

export default ItemContainer;
