import './style.css';
import addTodo from '../modules/addtodo.js';
import TodoList from '../modules/todoclass.js';
import deletetodo from '../modules/deletetodo.js';

const todoclass = new TodoList();
todoclass.todosList();
addTodo();

deletetodo();
