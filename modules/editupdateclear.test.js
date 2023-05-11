const { editTask, updateStatus, clearAll } = require('../_mocks_/editupdateclear.js');

describe('implement edit the Task description and clear all ', () => {
  test('edit the taks', () => {
    const editItem = editTask({
      id: 1,
      task: 'Ok Alishah',
      status: false,
    });
    expect(editItem).toBe(editItem);
  });

  test('edit the taks', () => {
    const editItem = editTask({
      id: 1,
      task: 'Ok Paul',
      status: false,
    });
    expect(editItem).toBe(editItem);
  });

  test('update the status', () => {
    expect(updateStatus(1)).toStrictEqual({
      id: 1,
      task: 'Ok Paul',
      status: true,
    });
  });

  test('clear all the complete task', () => {
    expect(clearAll()).not.toBe([{
      id: 1,
      task: 'Hello Sirat',
      status: false,
    }]);
  });
});