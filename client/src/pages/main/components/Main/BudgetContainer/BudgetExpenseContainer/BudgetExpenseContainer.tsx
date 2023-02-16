import ItemContainer from '@ItemContainer/ItemContainer';
import Item from '../ItemContainer/ItemGrid/Item/Item';
import './BudgetExpenseContainer.css';

function BudgetExpenseContainer() {
  return (
    <section className="budget__expense-container">
      <ItemContainer
        componentLeft={<Item btnText="Add Expense" color="red" headingText="Expenses" itemColor="red" />}
        componentRight={
          <Item btnText="Add Income Categories" color="orange" headingText="Categories" itemColor="orange" />
        }
      />
    </section>
  );
}

export default BudgetExpenseContainer;
