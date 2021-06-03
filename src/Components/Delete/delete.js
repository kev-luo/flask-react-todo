import React from "react";
import { useHistory } from "react-router-dom";

export default function Delete({ id }) {
  const history = useHistory();
  function deleteTodo() {
    fetch(`/api/${id}`, {
      method: "POST",
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push("/");
      });
  }
  return (
    <>
      <button onClick={deleteTodo}>Delete</button>
    </>
  );
}
