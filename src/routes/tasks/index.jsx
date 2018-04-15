import { Component } from 'preact';
import { connect } from 'preact-redux';
import cx from 'classnames';
import TodoEditor from '../../components/todo';
import SelectedTodo from '../../components/todo/selected';
import '../../style/todo.css';
import reducer from '../../reducers';
@connect(reducer)
export default class Todo extends Component {

  render({ selected }) {
    var view = selected && selected.title;
    return (
      <div className="row todoapp">
        <div className="col-lg-7 col-sm-12">
          <div class="card fluid">
            <TodoEditor />
          </div>
        </div>
        <div className={cx({ 'col-lg-5 col-sm-12 mb-top': true, 'hide': !view })}>
          <div className="card fluid">
            <SelectedTodo />
          </div>

        </div>
      </div>

    )
  }
}