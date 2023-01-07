function ActionButton(props: { btnType: 'trash' | 'pencil' }) {
  return (
    <button className="btn btn-icon">
      <i className={`${props.btnType} alternate icon`}></i>
    </button>
  );
}

export default ActionButton;
