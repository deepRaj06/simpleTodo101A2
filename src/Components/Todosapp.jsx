import React, { useState } from 'react'
import Todosinput from './Todosinput';
import TodosList from './TodosList';
import Todositem from './Todositem';
import {v4 as uuidv4} from 'uuid';
import styles from './todo.module.css';


export const Todosapp = () => {

    const [todos, setTodos] = useState([]);

    const addItem = (newTodo) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                value: newTodo,
                isCompleted: false
            }
        ])
    }

    const removeBtn = (value) => {
        let todoFilter = todos.filter( (todo) => {
            return todo.value !== value
        })
    setTodos(todoFilter);
    }

  return (
    <div className={styles.todosBgColor}>
        <Todosinput addItem={addItem}></Todosinput>

        <TodosList>
            {todos.map( (todo) => (
                <Todositem key={todo.id} todo={todo} removeBtn={removeBtn}></Todositem>
            ))}
            
        </TodosList>
    </div>
  )
}
