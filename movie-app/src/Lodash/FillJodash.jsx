import React from "react";
import _ from "lodash";

export default function FillJodash() {
  var arr = [
    { id: 1, name: "iphone 5" },
    { id: 2, name: "iphone XS" },
    { id: 3, name: "iphone X" },
    { id: 4, name: "iphone Xa" },
    { id: 5, name: "iphone Xc" },
  ];

  _.fill(arr, { id: 5, name: "SamSung" }, 1, 4);
  console.log("arr", arr);
  
  return <div>FillJodash</div>;
}
