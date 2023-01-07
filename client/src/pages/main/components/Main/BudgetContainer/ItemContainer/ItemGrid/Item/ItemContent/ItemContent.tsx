import ItemText from '@Item/ItemContent/itemText/ItemText';
import ActionButton from '@Item/ItemContent/actionButton/actionButton';
import './ItemContent.css';

function ItemContent(props: { itemColor: 'blue' | 'orange' | 'red' }) {
  return (
    <div className="item-content">
      <div className={`item-content__item item-content__item--${props.itemColor}`}>
        <ItemText />
        <div className="item-content__actions">
          <ActionButton btnType="trash" />
          <ActionButton btnType="pencil" />
        </div>
      </div>
    </div>
  );
}

export default ItemContent;
