import TodoList from './todoclass.js';

const inputvalue = document.getElementById('create-todo');
const enterCreate = document.getElementById('create');
const form = document.querySelector('.form');
const addTodo = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = new TodoList(inputvalue);
    todo.createTodo();
  });

  enterCreate.addEventListener('click', () => {
    const todo = new TodoList(inputvalue);
    todo.createTodo();
  });
};

module.exports = addTodo;