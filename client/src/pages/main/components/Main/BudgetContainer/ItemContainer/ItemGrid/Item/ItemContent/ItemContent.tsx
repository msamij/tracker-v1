import ItemText from '@Item/ItemContent/itemText/ItemText';
import IconButton from '@Item/ItemContent/actionButton/actionButton';
import './ItemContent.css';

function ItemContent(props: { itemColor: 'blue' | 'orange' | 'red' }) {
  return (
    <div className="item-content">
      <div className={`item-content__item item-content__item--${props.itemColor}`}>
        <ItemText />
        <div className="item-content__actions">
          <IconButton icon="trash" />
          <IconButton icon="pencil" />
        </div>
      </div>

      <IconButton icon="angle right" color="blue" />
    </div>
  );
}

export default ItemContent;
