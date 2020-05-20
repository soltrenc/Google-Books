import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", borderRadius: "5 white" }} className="btn">
      {props.children}
    </button>
  );
}
