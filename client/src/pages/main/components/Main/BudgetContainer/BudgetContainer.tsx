import BudgetHeader from '@BudgetContainer/BudgetHeader/BudgetHeader';
import BudgetIncomeContainer from '@BudgetContainer/BudgetIncomeContainer/BudgetIncomeContainer';
import './BudgetContainer.css';

function BudgetContainer() {
  return (
    <div className="budget__container">
      <BudgetHeader />
      <BudgetIncomeContainer />
      {/* <section className="income-box">
        <div className="budget-month">
          <h2 className="heading">July 2022</h2>
          <h2 className="heading budget-heading">
            Budget: <span>0</span>
          </h2>
        </div>

        <div className="box-container">
          <div className="box-left box-left__incomes">
            <button className="btn-primary btn-primary--blue add-income">add income</button>
            <h2 className="heading-secondary heading-secondary--blue">incomes</h2>
            <form className="items-box items-box__incomes" data-value="1">
              <li className="items-box__item income-box__income">
                <p className="items-box--text income-box__income-type">Salary1</p>
                <p className="items-box--text income-box__income-amount">500 Rs</p>
                <p className="items-box--text income-box__income-date">Jan 05, 2022</p>
                <div className="action-box">
                  <button type="submit" className="btn-secondary btn-delete-income">
                    <i className="trash alternate outline icon"></i>
                  </button>
                  <button className="btn-secondary btn-edit-income">
                    <i className="pencil alternate icon"></i>
                  </button>
                </div>
              </li>
            </form>
          </div>

          <div className="box-right box-right__income-categories">
            <button className="btn-primary btn-primary--orange add-income-category">add income category</button>
            <h2 className="heading-secondary heading-secondary--orange">categories</h2>

            <form className="category category__incomes" data-value="1">
              <li className="category__item category__item--grey category__item--income">
                <p className="category__title category__title--income">Salaries</p>
                <p className="category__date category__date--income">Jan 15, 2022</p>
                <div className="action-box">
                  <button className="btn-secondary btn-delete-income-category">
                    <i className="trash trash-orange alternate outline icon"></i>
                  </button>
                  <button className="btn-secondary btn-edit-income-category">
                    <i className="pencil pencil-orange alternate icon"></i>
                  </button>
                </div>
              </li>
            </form>
          </div>
        </div>
      </section>

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
