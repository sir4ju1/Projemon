import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	state = { view: false }

	menuClick = () => {
		this.setState({ view: true });
	}
	backClick = () => {
		this.setState({ view: false });
	}
	render(props, { view }) {
		return (
			<section>
				<header class="sticky">
					<label for="drawer-checkbox" class="button drawer-toggle"></label>
					<a href="javascript:" class="logo"><strong>Home</strong></a>
				</header>
				<input type="checkbox" id="drawer-checkbox" />
				<nav class="drawer">
					<label for="drawer-checkbox" class="close"></label>
					<section class="profile-part ">
					</section>
					<section>
						<Link activeClassName={style.active} href="/" onClick={this.backClick}>Home</Link>
						<Link activeClassName={style.active} href="/tasks/profile" onClick={this.backClick}>Project 1</Link>
						<Link activeClassName={style.active} href="/tasks/project-2" onClick={this.backClick}>Project 2</Link>
					</section>
				</nav>
			</section>

		);
	}
}
