import './style.css';
import addTodo from '../modules/addtodo.js';
import TodoList from '../modules/todoclass.js';

const todoclass = new TodoList();
todoclass.todosList();
addTodo();
