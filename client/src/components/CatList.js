import React from "react";
import Cat from "./Cat";


const CatList = (props) => {
  let message = props.cats.length === 0 ? "No Cats Found" : "";
  return (
    <div>
      {props.cats.map((cat, i) => <Cat
        name={cat.name}
        key={i} />)}
    </div>
  );
};

export default CatList;