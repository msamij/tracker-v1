import ItemGrid from '@ItemContainer/ItemGrid/ItemGrid';
import React from 'react';
import './ItemContainer.css';

interface IItemContainerProps {
  componentLeft: React.ReactNode;
  componentRight: React.ReactNode;
}

function ItemContainer(props: IItemContainerProps) {
  return (
    <div className="item-container">
      <ItemGrid component={props.componentLeft} />
      <ItemGrid component={props.componentRight} />
    </div>
  );
}

export default ItemContainer;
