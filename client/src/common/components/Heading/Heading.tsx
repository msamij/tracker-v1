interface IHeadingProps {
  headingText: string;
  headingType: 'bold' | 'normal';
  headingColor: 'orange' | 'red' | 'blue';
}

function Heading(props: IHeadingProps) {
  return (
    <h2 className={`heading heading--${props.headingColor} ${props.headingType === 'bold' && `heading--bold`}`}>
      {props.headingText}
    </h2>
  );
}

export default Heading;
