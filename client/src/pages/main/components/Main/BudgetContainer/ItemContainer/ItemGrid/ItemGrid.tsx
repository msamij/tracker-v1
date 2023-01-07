import Item from '@Item/Item';
import { IItem } from '@ItemContainer/type';
import './ItemGrid.css';

function ItemGrid(props: IItem) {
  return (
    <div className="item-container__grid">
      <Item btnText={props.btnText} color={props.color} headingText={props.headingText} itemColor={props.itemColor} />
    </div>
  );
}

export default ItemGrid;
