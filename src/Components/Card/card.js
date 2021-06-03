import React from "react";
import { Link } from "react-router-dom";

export default function Card({ listOfTodos }) {
  return (
    <>
      {listOfTodos.map((todo) => {
        return (
          <Link key={todo.id} to={`/${todo.id}`}>
            <h1>{todo.content}</h1>
          </Link>
        );
      })}
    </>
  );
}
