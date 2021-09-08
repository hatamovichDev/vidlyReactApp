import Like from "./common/like";

const Movies = (props) => {
	const { movies, onDelete, onLike } = props;

	if (!movies.length) return null;

	return (
		<div className="movies">
			<div className="container">
				<table className="movies__table shadow-sm table table table-striped table-light text-capitalize">
					<thead>
						<tr>
							<th scope="col">title</th>
							<th scope="col">genre</th>
							<th scope="col">stock</th>
							<th scope="col">rate</th>
							<th />
							<th />
						</tr>
					</thead>

					<tbody>
						{movies.map((movie) => {
							const {
								_id,
								title,
								genre,
								numberInStock,
								dailyRentalRate,
							} = movie;

							return (
								<tr key={_id} className="movie">
									<td className="movie__title">{title}</td>
									<td className="movie__genre">{genre.name}</td>
									<td className="movie__stock">{numberInStock}</td>
									<td className="movie__rate">{dailyRentalRate}</td>
									<td>
										<Like onLike={onLike} movie={movie} />
									</td>
									<td>
										<i
											onClick={() => onDelete(_id)}
											className="fa fa-remove"
											style={{
												cursor: "pointer",
												fontSize: 20,
												color: "crimson",
											}}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Movies;
