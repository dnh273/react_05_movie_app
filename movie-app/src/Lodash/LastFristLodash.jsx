import _ from "lodash";
import React from "react";

export default function LastFirstLodash() {
  const arrStudent = [
    { id: 1, name: "Peter" },
    { id: 2, name: "C.E.O" },
    { id: 3, name: "Happy" },
  ];

  const firstItem = _.first(arrStudent);
  const lastItem = _.last(arrStudent);

  const arr = [
    ["001", "I"],
    ["002", "Pofasd"],
    ["003", "Pofasdfsda"],
  ];

  const [id, name] = _.first(arr);
  const [id2, name2] = _.last(arr);

  return (
    <div>
      <div>First Item: {firstItem.name}</div>
      <div>Last Item: {lastItem.name}</div>
      <hr />
      <div>FirstItem: {id} - {name}</div>
      <div>LastItem: {id2} - {name2}</div>
    </div>
  );
}
