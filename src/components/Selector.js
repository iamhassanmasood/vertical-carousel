const Selector = ({ id, handleClick, activeID }) => {
  const componentClass = `selector${activeID === id ? " active" : ""}`;

  return <div className={componentClass} onClick={handleClick}></div>;
};

export default Selector;
