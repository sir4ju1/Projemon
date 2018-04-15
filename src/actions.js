export function selectTodo(todo) {
  return {
		type: 'SELECT_TODO',
		todo
	};
}