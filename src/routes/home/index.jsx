import { h, Component } from 'preact';
import ProjectCard from '../../components/project'
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div class="row">
					<div class="col-lg-4">
						<ProjectCard />
					</div>
					<div class="col-lg-4">
						<ProjectCard />
					</div>
					<div class="col-lg-4">
						<ProjectCard />
					</div>
				</div>
			</div>
		);
	}
}
