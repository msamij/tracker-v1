import Button from '@Common/Button/Button';
import Heading from '@Common/Heading/Heading';
import ItemContent from '@Item/ItemContent/ItemContent';

interface IItemProps {
  btnText: string;
  headingText: string;
  color: 'blue' | 'orange' | 'red';
  itemColor: 'blue' | 'red' | 'orange';
}

function Item(props: IItemProps) {
  return (
    <>
      <Button btnColor={props.color} btnText={props.btnText} />
      <Heading headingColor={props.color} headingText={props.headingText} headingType="bold" />
      <ItemContent itemColor={props.itemColor} />
    </>
  );
}

export default Item;
