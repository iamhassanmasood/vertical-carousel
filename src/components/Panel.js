import Selectors from "./Selectors";

const Panel = ({ data, panelStyle, activeID, changeActive }) => {
  return (
    <aside className="panel" style={panelStyle}>
      <Selectors data={data} activeID={activeID} changeActive={changeActive} />
      <h2 className="panel-header">{data[activeID].header}</h2>
    </aside>
  );
};

export default Panel;
