import React from "react";
import _ from "lodash";

export default function SortLodash() {
  const users = [
    { id: 5, name: "VAC", age: 48 },
    { id: 4, name: "kaito", age: 28 },
    { id: 10, name: "kaito", age: 38 },
    { id: 2, name: "kaito", age: 18 },
    { id: 9, name: "luffy", age: 28 },
    { id: 7, name: "Bake", age: 18 },
    { id: 1, name: "july", age: 48 },
  ];

  const resultSortLodash = _.sortBy(users, [(item) => item.age]);

  console.log("resultSortLodash", resultSortLodash);

  const result = _.sortBy(users, ["name", "age"]);

  console.log(result);
  return <div>SortLodash</div>;
}
