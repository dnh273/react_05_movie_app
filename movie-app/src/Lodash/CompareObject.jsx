import React from "react";
import _ from "lodash";

export default function CompareObject() {
  const arrA = [1, 2];
  const arrB = [1, 2];

  const result = _.isEqual(arrA, arrB);

  const arrC = [1, 2];
  const arrD = [2, 1];

  const result2 = _.isEqual(arrC.sort(), arrD.sort());

  console.log("result2", result2);

  const arrObject1 = [
    { id: 1, name: "Damn" },
    { id: "2", name: "it" },
  ];
  const arrObject2 = [
    { id: 1, name: "Damn" },
    { id: "2", name: "it" },
  ];

  const result3 = _.differenceWith(arrObject1, arrObject2, _.isEqual); // Tra ve mang rong

  const arrObject3 = [
    { id: 1, name: "Damn" },
    { id: "2", name: "it" },
  ];
  const arrObject4 = [
    { id: 1, name: "Damn" },
    { id: "2", name: "hang" },
    { id: "3", name: "fsdahang" },
  ];

  const result4 = _.differenceWith(arrObject3, arrObject4, _.isEqual);

  console.log("result4", result4);
  return <div>CompareObject</div>;
}
