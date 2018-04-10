import { Component } from 'preact';
import style from './style';
import UserCard from '../../components/user';
import Milestone from '../../components/milestone';
import Timeline from '../../components/timeline';
export default class Profile extends Component {
	
	// Note: `user` comes from the URL, courtesy of our router
	render({ project }, state) {
		return (
			<div>
				<div className="row">
					<div className="col-lg-3 col-sm-12">
						<Milestone />
						<Milestone />
						<Milestone />
						<Milestone />
						<Milestone />
					</div>
					<div className="col-lg-3 col-sm-12">
						<UserCard />
						<UserCard />
						<UserCard />
						<UserCard />
						<UserCard />
					</div>
					<div className="col-lg-6 col-sm-12">
						<div class={style.timeline}>
							<Timeline />
						</div>
					</div>
				</div>

			</div>
		);
	}
}
