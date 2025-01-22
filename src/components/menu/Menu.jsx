import { StyledLink } from './menu.styles';

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<StyledLink to='/'>HOME</StyledLink>
				</li>
				<li>
					<StyledLink to='/login'>LOGIN</StyledLink>
				</li>
				<li>
					<StyledLink to='/profile'>PROFILE</StyledLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
