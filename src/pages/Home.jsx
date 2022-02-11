import React, { useState } from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import { Container, List } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';

export default function Home() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    }

  return (
  <Container maxWidth="xs" style={{ marginTop: "1em" }}>
   
   <h1 style={{ fontSize: "40px" }}>
       <TodayIcon style={{ marginRight: "0.2em", fontSize: "34px", color: "#4169e1"}}/> 
       Hoje
    </h1>
    <List sx={{ width: '100%', marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: '1em' }}>
            <TodoItem todo={todo} deleteTodo={deleteTodo}/>
          </div>
     ))}
    </List>
    <Form addTodo={addTodo} />
  </Container>
  );
}
