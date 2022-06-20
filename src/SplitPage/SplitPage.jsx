import React from "react";
import Button from "../Button/Button";
import './SplitPage.scss';

function SplitPage(props) {

  return (
    <div 
      className={`split_${props.position}`}
      onMouseEnter = {props.onMouseEnter}
      onMouseLeave= {props.onMouseLeave}
      style={{width: props.width}} 
      >
      <h1>{props.text}</h1>
      <Button/>
    </div>
  )
}

export default SplitPage;