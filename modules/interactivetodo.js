const interacttodo = () => {
  const checklist = document.querySelectorAll('.mycheck');
  for (let i = 0; i < checklist.length; i += 1) {
    checklist[i].addEventListener('change', (e) => {
      const { id } = e.target;
      const todos = JSON.parse(localStorage.getItem('todos')) || [];
      const search = todos.find((item) => item.index.toString() === id);
      if (e.target.checked) {
        if (search !== undefined) {
          search.completed = !search.completed;
          search.index = id;
        }
        document.location.reload();
      }

      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }
};

export default interacttodo;