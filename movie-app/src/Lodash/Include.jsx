import React from "react";
import _ from "lodash";

export default function Include() {
  const arr = ["1", "2", "3"];

  console.log(_.includes(arr, "1"));

  const object = { id: 1, name: "Nguyen Van Phuc", age: 18 };

  console.log("Ket qua", _.includes(object, 1));

  return <div>Include</div>;
}
