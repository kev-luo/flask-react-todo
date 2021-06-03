import React from "react";

export default function Form({ userInput, onFormChange, onFormSubmit }) {
  function handleChange(e) {
    onFormChange(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          required
        ></input>
        <input type="submit"></input>
      </form>
    </>
  );
}
