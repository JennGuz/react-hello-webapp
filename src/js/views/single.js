import React, { useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		// actions.getCharacters(params.theid)
	},[params.theid])

	return (
		<div className="jumbotron">
			<hr className="my-4" />
			<div>

				{params.theid}
			</div>
			<div>
				{/* {JSON.stringify(store.characterProperties)} */}
			</div>
			<Link to={`/single/${Number(params.theid) + 1}`}>Next</Link>

		</div>
	);
};
