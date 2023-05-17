import React from "react";

function MenuContainer({ game }) {
  return <div className="iconContainer">{game} key={game._id}</div>;
}

export default MenuContainer;