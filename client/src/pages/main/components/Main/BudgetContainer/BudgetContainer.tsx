import BudgetExpenseContainer from '@BudgetContainer/BudgetExpenseContainer/BudgetExpenseContainer';
import BudgetHeader from '@BudgetContainer/BudgetHeader/BudgetHeader';
import BudgetIncomeContainer from '@BudgetContainer/BudgetIncomeContainer/BudgetIncomeContainer';
import BudgetFooter from '@Footer/BudgetFooter';
import './BudgetContainer.css';

function BudgetContainer() {
  return (
    <div className="budget__container">
      <BudgetHeader />
      <BudgetIncomeContainer />
      <BudgetExpenseContainer />
      <BudgetFooter />
      {/*
      <section className="expense-box">
        <div className="box-container">
          <div className="box-left box-left__expenses">
            <button className="btn-primary btn-primary--red add-expense">add expense</button>

            <h2 className="heading-secondary heading-secondary--red">expenses</h2>

            <form className="items-box items-box__expenses" data-value="1">
              <li className="items-box__item expense-box__expense">
                <p className="expense-box__expense-type">Apples</p>
                <p className="expense-box__expense-amount">10 Rs</p>
                <p className="expense-box__expense-date">Jan 05, 2022</p>
                <div className="action-box">
                  <button type="submit" className="btn-secondary btn-delete-expense"></button>
                  <button className="btn-secondary btn-edit-expense"></button>
                </div>
              </li>
            </form>
          </div>

          <div className="box-right box-right__expense-categories">
            <button className="btn-primary btn-primary--orange add-expense-category">add expense category</button>

            <h2 className="heading-secondary heading-secondary--orange">categories</h2>

            <form className="category category__expenses" data-value="1">
              <li className="category__item category__item--white category__item--expense">
                <p className="category__title category__title--expense">Shopping</p>
                <p className="category__date category__date--expense">Jan 05, 2022</p>
                <div className="action-box">
                  <button className="btn-secondary btn-delete-expense-category"></button>
                  <button className="btn-secondary btn-edit-expense-category"></button>
                </div>
              </li>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default BudgetContainer;
