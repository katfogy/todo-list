import TodoList from '../todoclass.js';
import deletetodo from '../deletetodo.js';

describe('check if addTask and removeTask methods work', () => {
  document.body.innerHTML = `<ul class="container list-none" id="container"><li class="singleLi" id="0">
    <div class="checking">
    <input type="text" id="addTo" name="addTo" placeholder="Add to your list...">
    <input type="checkbox" class="checkbox" name="checkbox" />
        <input type="text" class="task-input" value="eat breakfast">
    </div>
    <i class="fa-solid fa-trash-can icon delete"></i>
</li></ul>`;

  test('Checking if addTask method is working properly and adding input value on click', () => {
    // arrange
    const inputAdd = document.getElementById('addTo');
    inputAdd.value = 'hello boy';
    //  act
    const addTask = TodoList.createTodo();
    // assert
    expect(addTask).toEqual({
      description: 'hello boy',
      complete: false,
      index: 0,
    });
  });
  test('Checking if task is getting added to local storage', () => {
    // arrange
    const object = {
      description: 'what"s up',
      complete: false,
      index: 0,
    };
    localStorage.setItem('lion', JSON.stringify([object]));
    //   act
    const storage = localStorage.getItem('lion');
    //   assert
    expect(storage).toEqual(
      JSON.stringify([
        {
          description: 'what"s up',
          complete: false,
          index: 0,
        },
      ]),
    );
  });
  test('checking if removeTask removes the correct item in the array', () => {
    // arrange
    const listContainer = document.getElementById('container');
    // assert
    expect(listContainer.childElementCount).toBe(1); // currently one item in listContainer
    //  act
    deletetodo(0);

    TodoList.todosList();
    // assert
    expect(listContainer.childElementCount).toBe(0); // remove item from listContainer
  });
});