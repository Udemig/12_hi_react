import React from "react";

const Example = ({ count, giveAlert }) => {
  console.log(`Example bileşeni render edildi`);

  return (
    <div className="container mt-5">
      <p>{count} </p>
    </div>
  );
};

export default React.memo(Example);
