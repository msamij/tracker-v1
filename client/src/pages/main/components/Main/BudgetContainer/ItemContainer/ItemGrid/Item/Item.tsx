import Button from '@Common/Button/Button';
import Heading from '@Common/Heading/Heading';
import ItemContent from '@Item/ItemContent/ItemContent';
import { IItem } from '@ItemContainer/type';

function Item(props: IItem) {
  return (
    <>
      <Button btnColor={props.color} btnText={props.btnText} />
      <Heading headingColor={props.color} headingText={props.headingText} headingType="bold" />
      <ItemContent itemColor={props.itemColor} />
    </>
  );
}

export default Item;
