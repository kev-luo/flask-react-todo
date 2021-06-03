import React, { useState, useEffect } from "react";
import Card from "../Components/Card/card";
import Form from "../Components/Form/form";

export default function TodoPage() {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");

  useEffect(() => {
    getLatestTodos();
  }, []);

  function handleFormChange(inputValue) {
    setAddTodo(inputValue);
  }

  function handleFormSubmit() {
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        content: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        setAddTodo("");
        getLatestTodos();
      });
  }

  function getLatestTodos() {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  }

  return (
    <>
      <Form
        userInput={addTodo}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Card listOfTodos={todo} />
    </>
  );
}
