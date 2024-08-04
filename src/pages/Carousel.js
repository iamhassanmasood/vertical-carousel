import { useState } from "react";
import Panel from "../components/Panel";
import Detail from "../components/Detail";
import useFetch from "../hooks/useFetch";
import { CarouselEndPoint } from "../api/endpoints";

const Carousel = () => {
  const { data, loading, error } = useFetch(CarouselEndPoint);

  const [activeID, setActiveID] = useState(0);

  const panelStyle = {
    backgroundColor: data && data[activeID]?.color,
  };

  const changeActive = (id) => {
    setActiveID(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="wrapper">
      <Panel data={data} panelStyle={panelStyle} activeID={activeID} changeActive={changeActive} />
      <Detail data={data[activeID]} />
    </section>
  );
};

export default Carousel;
