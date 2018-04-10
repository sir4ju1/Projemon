import { h, Component } from "preact";
import style from './style';
export default class UserCard extends Component {
  render() {
    return (
      <div class="card fluid">
        <div class="row">
          <div className="col-lg-3 col-sm-3">
            <div className={style.avatar}>
            </div>
          </div>
          <div className="col-lg-9 col-sm-9">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className={style.title}>
                  User Name
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-sm-7"><progress class={style.progress}  value="450" max="1000"></progress></div>
              <div className={"col-lg-5 col-sm-5 " + style.count}><span>10</span>/<span class={style.total}>30</span></div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}