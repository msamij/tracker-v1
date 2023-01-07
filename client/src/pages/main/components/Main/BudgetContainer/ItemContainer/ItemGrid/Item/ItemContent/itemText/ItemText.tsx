import './ItemText.css';

interface IItemTextProps {
  itemDate: string;
  itemTitle: string;
  itemAmount: string;
}

function ItemText() {
  return (
    <>
      <p className="heading item-content__item-text">Salary 1</p>
      <p className="heading item-content__item-text">500 Rs</p>
      <p className="heading item-content__item-text">2 Jan 2023</p>
    </>
  );
}

export default ItemText;
