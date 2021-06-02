import React from "react";

export default function Card({ listOfTodos }) {
  return (
    <>
      {listOfTodos.map((todo) => {
        return <h1 key={todo.id}>{todo.content}</h1>;
      })}
    </>
  );
}
