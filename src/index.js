import './style.css';
import addTodo from '../modules/addtodo.js';
import TodoList from '../modules/todoclass.js';
import deletetodo from '../modules/deletetodo.js';
import edittodo from '../modules/edittodos.js';
import interacttodo from '../modules/interactivetodo.js';
import clearcompleted from '../modules/clearcompleted.js';

const todoclass = new TodoList();
todoclass.todosList();
addTodo();
deletetodo();
edittodo();
interacttodo();
clearcompleted();
