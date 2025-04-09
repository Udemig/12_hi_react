import React from "react";

const ListItem = ({ item, addToBasket }) => {
  console.log(`Selamlar`);

  return (
    <>
      <li className="p-2 border-bottom">
        <h2 onClick={addToBasket}>{item}</h2>
      </li>
    </>
  );
};

export default React.memo(ListItem);
