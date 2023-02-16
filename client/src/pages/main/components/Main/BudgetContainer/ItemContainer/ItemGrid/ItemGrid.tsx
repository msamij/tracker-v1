import './ItemGrid.css';

interface IItemGridProps {
  component: React.ReactNode;
}

function ItemGrid(props: IItemGridProps) {
  return <div className="item-container__grid">{props.component}</div>;
}

export default ItemGrid;
