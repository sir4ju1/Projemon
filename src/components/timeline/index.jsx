import { h, Component } from "preact";

import style from './style';

export default class Timeline extends Component {
  render() {
    return (
      <div class={style.container}>

        <div class={style.item}>
          <div id={style.timeline}>
            <div>
              <section class={style.year}>
                <span>
                  <strong class={style.month}>03</strong><br/>
                  <strong class={style.yeartext}>2018</strong>
                </span>
                <section>
                  <h4>03 (Sunday)</h4>
                  <ul>
                    <li>Uzzol done <a href="">#3252345</a></li>
                    <li>Uzzol done <a href="">#3252345</a></li>
                  </ul>
                </section>
                <section>
                  <h4>02 (Saturday)</h4>
                  <ul>
                    <li>Uzzol done <a href="">#3252345</a></li>
                    <li>Uzzol done <a href="">#3252345</a></li>
                  </ul>
                </section>
              </section>
              <section class={style.year}>
                <span>
                  <strong class={style.month}>02</strong><br/>
                  <strong class={style.yeartext}>2018</strong>
                </span>
                <section>
                  <h4>02 (Saturday)</h4>
                  <ul>
                    <li>Uzzol done <a href="">#3252345</a></li>
                    <li>Uzzol done <a href="">#3252345</a></li>
                  </ul>
                </section>
                
              </section>
              <section class={style.year}>
                <span>
                  <strong class={style.month}>01</strong><br/>
                  <strong class={style.yeartext}>2018</strong>
                </span>
                <section>
                  <h4>02 (Saturday)</h4>
                  <ul>
                    <li>Uzzol done <a href="">#3252345</a></li>
                    <li>Uzzol done <a href="">#3252345</a></li>
                  </ul>
                </section>
                
              </section>

            </div>
          </div>
        </div>
      </div>
    )
  }
}