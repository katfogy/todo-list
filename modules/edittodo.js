import TodoList from './todoclass.js';

const updatetodo = (description, id) => {
  const Todos = JSON.parse(localStorage.getItem('todos')) || [];
  if (description === '') {
    alert('desc cannot be Empty');
  } else {
    const search = Todos.find((todo) => todo.index.toString() === id);
    if (search !== undefined) {
      search.description = description;
      search.index = id;
      localStorage.setItem('todos', JSON.stringify(Todos));
    }

    const refresh = new TodoList();
    refresh.todosList();
    document.location.reload();
  }
};

const edittodo = () => {
  const allselected = document.querySelectorAll('.text-todo');
  for (let i = 0; i < allselected.length; i += 1) {
    allselected[i].addEventListener('click', (e) => {
      const { id } = e.target;
      const input = document.createElement('input');
      const inputvalue = allselected[i].textContent;
      allselected[i].textContent = '';
      input.setAttribute('type', 'text');
      allselected[i].appendChild(input);
      input.focus();
      input.value = inputvalue;
      input.addEventListener('focusout', () => {
        updatetodo(input.value, id);
      });
    });
  }
};

export default edittodo;