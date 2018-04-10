import { h, Component } from "preact";

import style from "./style.css";

export default class Milestone extends Component {
  render() {
    return (
      <div className={style.milestone}>
        <div className="card fluid">
          <div className="row">
            <div className="col-lg-8 col-sm-8"><h6>Milestone 1</h6></div>
            <div className="col-lg-4 col-sm-4"><h6><strong>30</strong> days</h6></div>
          </div>
        </div>
      </div>
    )
  }
}