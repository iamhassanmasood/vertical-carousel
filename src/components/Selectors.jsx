import Selector from "./Selector";

const Selectors = ({ data, activeID, changeActive }) => {
  return (
    <div className="selectors">
      {data.map((item) => (
        <Selector key={item.id} id={item.id} handleClick={() => changeActive(item.id)} activeID={activeID} />
      ))}
    </div>
  );
};

export default Selectors;
