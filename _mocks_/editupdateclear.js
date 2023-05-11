const todos = [{ id: 1, task: 'Hello alishah', status: false }, { id: 2, task: 'Hello Sirat', status: false }];
const editTask = (item) => {
  const exactTodo = todos.find((todo) => todo.id === item.id);
  exactTodo.task = item.task;
};

const updateStatus = (id) => {
  const exactTodo = todos.find((todo) => todo.id === id);
  exactTodo.status = true;
  return exactTodo;
};

const clearAll = () => {
  const exactTodo = todos.filter((todo) => todo.status !== true);
  exactTodo.forEach((todo, id) => {
    todo.id = id + 1;
  });
  return exactTodo;
};

module.exports = { editTask, updateStatus, clearAll };