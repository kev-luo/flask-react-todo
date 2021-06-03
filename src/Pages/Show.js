import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        todo.map((data) => <div key={data.id}>{data.content}</div>)}
    </div>
  );
}
