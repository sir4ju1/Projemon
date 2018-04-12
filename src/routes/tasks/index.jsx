import {Component} from 'preact';
import linkState from 'linkstate';
import cx from 'classnames';
import TodoEditor from '../../components/todo';
import '../../style/todo.css';
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
export default class Todo extends Component {
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
        nItem = {completed: !i.completed, title: i.title}
      } else {
        nItem = {completed: i.completed, title: i.title}
      }
      return nItem;
    });
  
    // console.log(newItems)
    
		this.setState({newItems})
		event.preventDefault();
	}
  handleSubmit = () => {
		var val = this.state.editText.trim();
		if (val) {
      var newItems = this.state.newItems;
      newItems.push({completed: false, title: val})
      this.setState({newItems});
      this.setState({ editText: '' });
		}
		else {
			// onDestroy(todo);
		}
	}
  handleKeyDown = e => {
		if (e.which===ESCAPE_KEY) {
			let { todo } = this.props;
			this.setState({ editText: todo.title });
		}
		else if (e.which===ENTER_KEY) {
			this.handleSubmit();
		}
  }
  
  render({}, {editText, newItems}) {
    return (
      <div className="row">
        <div className="col-lg-7 col-sm-12">
        <div class="todoapp card fluid">
          <TodoEditor />
        </div>
      </div>
        <div className="col-lg-5 col-sm-12 mb-top">
          <div className="card fluid">
            <section className="subtask-header">
              <input type="checkbox" className="toggle-detail" />
              <h3>I dont know</h3>
            </section>
            <section class="add-subtask">
              <h5>Add Subtask</h5>
              <div class="subtask-row">
                {
                  newItems.map(item => (
                    <div class={cx({'subtask-line':true, 'completed': item.completed })}>
                      <input type="checkbox" className="toggle subtask" checked={item.completed} onChange={() => this.toggle(item)}/>
                      <h4>{item.title}</h4>
                    </div>
                  ))
                }
              </div>
              <div className="new-line">
                <a href="javascript:"><i className="material-icons">add</i></a>
                <input
                  type="text" 
                  placeholder="Add task"
                  value={editText}
                  onInput={linkState(this, 'editText')}
                  onKeyDown={this.handleKeyDown}
                  />
              </div>
            </section>
          </div>
        </div>
      </div>
      
    )
  }
}