import {Component} from 'preact';
import TodoEditor from '../../components/todo';
import '../../style/todo.css';
export default class Todo extends Component {
  render() {
    return (
      <div class="todoapp">
        <TodoEditor />
      </div>
    )
  }
}