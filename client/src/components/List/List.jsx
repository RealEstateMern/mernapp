import React from "react";
import "./list.scss";
import Card from "../card/card";
import { listData } from "../../lib/dummydata";

function List() {
  return (
    <div className="List">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
