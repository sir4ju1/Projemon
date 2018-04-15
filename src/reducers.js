
const INITIAL = {
  selected: {}
}
export default (state = INITIAL, action) => {
  switch (action.type) {
    case 'SELECT_TODO':
      return Object.assign({}, state, {selected: action.todo})
    default:
      return state;
  }
}
