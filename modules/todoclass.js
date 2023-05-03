class TodoList {
  constructor(description) {
    this.description = description;
  }

  todosList() {
    const alltodos = document.getElementById('to-do-list');
    const clearbtn = document.querySelector('.to-do-clear');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    clearbtn.style.display = 'none';
    if (todos.length > 0) {
      this.id = 0;
      alltodos.innerHTML = todos.map((todo) => ` <li class="each-todo"><input type="checkbox"> <p class="text-todo">${todo.description}</p><i class="fa-solid fa-trash" id=${todo.index}></i></li>`).join('');
      clearbtn.style.display = 'block';
    } else {
      alltodos.innerHTML = ' <p>No Todo List added</p>';
    }
  }

  createTodo() {
    const Todos = JSON.parse(localStorage.getItem('todos')) || [];
    if (this.description.value === '') {
      alert('desc cannot be Empty');
    } else {
      const index = Todos.length + 1;
      Todos.push({
        index,
        description: this.description.value,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(Todos));
      this.description.value = '';
      this.todosList();
    }
  }
}

export default TodoList;