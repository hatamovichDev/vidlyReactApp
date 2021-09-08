const Like = (props) => {
	return (
		<i
			onClick={() => props.onLike(props.movie)}
			className={props.movie.liked ? "fa fa-heart" : "fa fa-heart-o"}
			style={{
				cursor: "pointer",
				color: "crimson",
				fontSize: 20,
			}}
		/>
	);
};

export default Like;
