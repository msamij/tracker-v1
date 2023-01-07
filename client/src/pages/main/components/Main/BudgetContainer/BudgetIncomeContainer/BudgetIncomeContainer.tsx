import Budget from '@BudgetContainer/Budget/Budget';
import ItemContainer from '@ItemContainer/ItemContainer';

function BudgetIncomeContainer() {
  return (
    <section className="budget__income-container">
      <Budget />
      <ItemContainer />
    </section>
  );
}

export default BudgetIncomeContainer;
