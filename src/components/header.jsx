const Header = (props) => {
	const { author, appTitle, appDescription, moviesCount } = props;

	return (
		<header className="header shadow-sm">
			<div className="header__container container">
				<div className="header__title appTitle">
					<h1 className="appTitle__title">{appTitle}</h1>
					<span className="appTitle__subtitle">
						{appDescription} by {author}
					</span>
				</div>

				{moviesCount ? (
					<span className="counter">
						showing {moviesCount} movies in the database
					</span>
				) : (
					<span className="counter counter--warning">
						There are no movies in the database
					</span>
				)}
			</div>
		</header>
	);
};

export default Header;
