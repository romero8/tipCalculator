import { useState } from "react";
import "./Input.css";

export function Input(props) {

  const label = props.label;
  const icon = props.icon;
  
  
  


  return (
    <div className="box">
      <label className="label">{label}</label>
      <input className="input" type={"number"} onChange={e=>props.set(e.target.value)}/>
    </div>
  );
}
