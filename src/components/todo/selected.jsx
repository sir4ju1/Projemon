import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import linkState from 'linkstate';
import cx from 'classnames';
import * as actions from '../../actions';
import reducers from '../../reducers';
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
@connect(reducers, actions)
export default class SelectedTask extends Component {
  constructor() {
    super();
    this.state = {
      editText: '',
      newItems: []
    }
  }
  toggle = item => {
    var newItems = this.state.newItems.map((i) => {
      var nItem = {}
      if (i === item) {
        nItem = { completed: !i.completed, title: i.title }
      } else {
        nItem = { completed: i.completed, title: i.title }
      }
      return nItem;
    });

    // console.log(newItems)

    this.setState({ newItems })
    event.preventDefault();
  }
  handleSubmit = () => {
    var val = this.state.editText.trim();
    console.log(val)
    if (val) {
      var newItems = this.state.newItems;
      newItems.push({ completed: false, title: val })
      this.setState({ newItems });
      this.setState({ editText: '' });
    }
    else {
      // onDestroy(todo);
    }
  }
  handleKeyDown = e => {
    if (e.which === ESCAPE_KEY) {
      // let { todo } = this.props;
      // this.setState({ editText: todo.title });
    }
    else if (e.which === ENTER_KEY) {
      this.handleSubmit();
    }
  }
  // shouldComponentUpdate({ selected }) {
  // 	return selected !== this.props.selected;
  // }
  render({ selected, selectTodo }, { editText, newItems }) {
    return (
      <div class="">
        <section className="subtask-header">
          <input type="checkbox" className="toggle-detail" />
          <h3>{selected.title}</h3>
        </section>
        <section class="add-subtask">
          <h5>Subtask</h5>
          <div className="subtask-items">
            <div class="subtask-row">
              {
                newItems.map(item => (
                  <div class={cx({ 'subtask-line': true, 'completed': item.completed })}>
                    <input type="checkbox" className="toggle subtask" checked={item.completed} onChange={() => this.toggle(item)} />
                    <h4>{item.title}</h4>
                  </div>
                ))
              }
            </div>
            <div className="new-line">
              <a href="javascript:">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </a>
              <input
                type="text"
                placeholder="Add task"
                value={editText}
                onInput={linkState(this, 'editText')}
                onKeyDown={this.handleKeyDown}
              />
            </div>
          </div>
        </section>
        <div className="footer">
            <a href="javascript:" onClick={() => selectTodo({}) } className=""><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg></a>
        </div>
      </div>
    )
  }
}