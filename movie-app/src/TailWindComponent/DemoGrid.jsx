import React from "react";

export default function DemoGrid() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-400">1</div>
        <div className="bg-green-400">2</div>
        <div className="bg-purple-400">3</div>
        <div>3</div>
      </div>
    </div>
  );
}
