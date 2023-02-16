import Budget from '@BudgetContainer/Budget/Budget';
import Item from '@Item/Item';
import ItemContainer from '@ItemContainer/ItemContainer';
import './BudgetIncomeContainer.css';

function BudgetIncomeContainer() {
  return (
    <section className="budget__income-container">
      <Budget />
      <ItemContainer
        componentLeft={<Item btnText="Add Income" color="blue" headingText="Incomes" itemColor="blue" />}
        componentRight={
          <Item btnText="Add Income Categories" color="orange" headingText="Categories" itemColor="orange" />
        }
      />
    </section>
  );
}

export default BudgetIncomeContainer;
