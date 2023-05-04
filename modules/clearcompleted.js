import TodoList from './todoclass.js';

const clearcompleted = () => {
  const clearbtn = document.getElementById('to-do-clear');
  clearbtn.addEventListener('click', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter((complete) => !complete.completed);
    todos.forEach((task, i) => { task.index = i + 1; });
    localStorage.setItem('todos', JSON.stringify(todos));
    const todo = new TodoList();
    todo.todosList();
  });
};

export default clearcompleted;