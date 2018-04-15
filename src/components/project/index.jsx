import { h, Component } from 'preact';
import style from "./style";
import 'chartist/dist/chartist.css';
export default class ProjectCard extends Component {
  componentDidMount() {
    let Chartist = require('chartist');
    this.chartist = new Chartist.Pie(this.chart, {
      series: [10, 10, 10]
    }, {
        donut: true,
        donutWidth: 30,
        startAngle: 270,
        total: 30,
        showLabel: true,
        height: '100px',
      });
    var data = {
      labels: ['01', '02', '03', '04', '05', '06', '07', '08'],
      series: [
        [1, 2, 4, 8, 6, 5, 4, 3]
      ]
    };

    var options = {
      high: 10,
      low: 0,
      height: '100px',
      seriesBarDistance: 0,
      axisX: {
        showGrid: false,
      },
      axisY: {
        showGrid: false,
      },
    };

    new Chartist.Bar(this.chart_bar, data, options);

  }
  render() {

    return (
      <div class="card fluid">
        <div class={"section " + style.project}>
          <div className="row">
            <div className="col-lg-10 col-sm-9"><h3>Project One</h3></div>
            <div className={"col-lg-2 col-sm-3 " + style.seperator}>
              <a href="/project/some" class={style.viewButton}>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="section">
          <div className="row">
            <div className="col-lg-3 col-sm-4">
              <p><span className={style.title}>10</span><sup>Tested</sup></p>
            </div>
            <div className="col-lg-3 col-sm-4">
              <p><span className={style.title}>20</span><sup>Done</sup></p>
            </div>
            <div className="col-lg-3 col-sm-4">
              <p><span className={style.title}>30</span><sup>Total</sup></p>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className={`ct-chart`} ref={(ref) => this.chart = ref}>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={`ct-chart-bar`} ref={(ref) => this.chart_bar = ref}>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}