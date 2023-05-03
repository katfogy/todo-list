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
      alltodos.innerHTML = todos.map((todo) => ` <li class="each-todo"><input type="checkbox"> <p>${todo.description}</p><i class="fa-solid fa-trash"></i></li>`).join('');
      clearbtn.style.display = 'block';
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
      alert('Todo Added');
    }
  }
}

export default TodoList;