import React from "react";

export default function TaskSimpleNoArgs() {
  return (
    <div className="list-item">
      <input type="text" value={"no args"} readOnly={true} />
    </div>
  );
}
