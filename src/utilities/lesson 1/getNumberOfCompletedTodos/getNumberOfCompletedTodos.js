export function countCompletedTodos(todos) {
  return todos.reduce((numberOfCompletedTodos, todo) => {
    if (todo.completed) {
      return numberOfCompletedTodos + 1;
    }
    return numberOfCompletedTodos;
  }, 0);
}

export function getNumberOfCompletedTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((todos) => {
      return countCompletedTodos(todos);
    });
}
