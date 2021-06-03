import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Delete from "../Components/Delete/delete";

export default function Show() {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  }, [id]);
  return (
    <div>
      {todo?.length > 0 &&
        todo.map((data) => {
          return (
            <div key={data.id}>
              <h1>{data.content}</h1>
              <Delete id={data.id} />
              <Link to="/">Back to Home</Link>
            </div>
          );
        })}
    </div>
  );
}
