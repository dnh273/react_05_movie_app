import React from "react";
import _ from "lodash";

export default function JoinLodash() {
  let arr = ["Khai", "Nam", "Minh"];

  let arrPerson = [
    { id: 1, name: "Khai" },
    { id: 2, name: "Nam" },
    { id: 3, name: "Tu" },
  ];
  // es6
  const result = arr.join("-");

  //  lodash
  const resultLoash = _.join(arr, "*");

  const person = _.find(arrPerson, (item) => item.id === 2);

  return (
    <div>
      {result}
      <br />
      {resultLoash}
      <br></br>
      <div>
        <p>
          Name: {person.name} - id: {person.id}
        </p>
      </div>
    </div>
  );
}
