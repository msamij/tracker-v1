import { BaseStyleType } from 'src/common/type';
import './actionButton.css';

type IconButtonProps = BaseStyleType & {
  icon: 'trash' | 'pencil' | 'angle right' | 'angle left';
};

function IconButton(props: IconButtonProps) {
  return (
    <button className={`btn btn-icon color--${props.color}`}>
      <i className={`${props.icon} alternate icon`}></i>
    </button>
  );
}

export default IconButton;
