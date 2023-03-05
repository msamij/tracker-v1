import { BaseStyleType } from 'src/common/type';

enum IconClasses {
  deleteIcon = 'trash',
  pencilIcon = 'pencil',
  arrowRight = 'angle right',
  arrowLeft = 'angle left',
}

type IconButtonProps = BaseStyleType & {
  iconClass: IconClasses;
};

function IncomeAndExpenseIconButton(props: IconButtonProps) {
  return (
    <button className={`btn btn-icon color--${props.color}`}>
      <i className={`${props.iconClass} alternate icon`}></i>
    </button>
  );
}

export default IncomeAndExpenseIconButton;
