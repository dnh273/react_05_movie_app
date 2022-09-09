import React from "react";
import _ from "lodash";

export default function UniqLodash() {
  const arr = [1, 2, 2, 2, 4, 5, 6];

  console.log(_.uniq(arr));

  const arrLodash = [
    { id: "1", name: "1fsdaf", price: 1000 },
    { id: "2", name: "2fsdaf", price: 1000 },
    { id: "3", name: "3fsdaf", price: 1000 },
    { id: "3", name: "3fsdaf", price: 1000 },
    { id: "3", name: "3fsdaf", price: 1000 },
    { id: "4", name: "4ffsdaf", price: 1000 },
    { id: "5", name: "5fsdaf", price: 1000 },
  ];

  console.log(_.uniqBy(arrLodash, "id"));
  return <div>UniqLodash</div>;
}
