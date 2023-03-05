import { BaseStyleType } from 'src/common/type';
import './Heading.css';

type HeadingProps = BaseStyleType & {
  weight: 'bold' | 'normal';
};

function Heading(props: HeadingProps) {
  return <h2 className={`heading--${props.color} ${props.weight === 'bold' && `heading--bold`}`}>{props.text}</h2>;
}

export default Heading;
