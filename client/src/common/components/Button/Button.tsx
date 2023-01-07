function Button(props: { btnColor: 'orange' | 'blue' | 'red'; btnText: string }) {
  return <button className={`btn btn--${props.btnColor}`}>{props.btnText}</button>;
}

export default Button;
