// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function handleButton(event) {
    console.log("Eyes on me")
  }

function handleFocus() {
  console.log("Good!")
}

function handleBlur() {
  console.log("Hey! Eyes on me!");
}

  return (
    <button 
      onClick={handleButton}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >Eyes on me</button>
  )
}

export default EyesOnMe;
