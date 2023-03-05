import { BaseStyleType } from 'src/common/type';

function Button(props: BaseStyleType) {
  return <button className={`btn btn--${props.color}`}>{props.text}</button>;
}

export default Button;
