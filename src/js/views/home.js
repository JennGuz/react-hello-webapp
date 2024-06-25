import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";


export const Home = () => {

	return (
		<>
			<main className="container">
				<section className="menu">
					<div>
						<Link to="/gallery/characters">
							<img src="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/star-wars-el-porque-de-los-nombres-de-los-nuevos-personajes/67610155-1-esl-ES/Star-Wars-el-porque-de-los-nombres-de-los-nuevos-personajes.jpg"/>
						</Link>
					</div>
					<div>
						<Link to="/gallery/films">
							<img src="https://sm.ign.com/ign_ap/screenshot/default/dx5-044-1570026661-3_52y1.jpg"/>
						</Link>
					</div>
					<div>
						<Link to="/gallery/species">
							<img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2016/12/Admiral-Ackbar-star-wars-its-a-trap.jpg"/>
						</Link>
					</div>
					<div>
						<Link to="/gallery/starships">
							<img src="https://www.cnet.com/a/img/resize/7fa57c81e77d02aeeccac436962f0f25fe741802/hub/2016/09/15/350ffa18-f823-4d76-abd1-083f17f21efe/starwarsshipsdevastator.jpg?auto=webp&width=1200"/>
						</Link>
					</div>
					<div>
						<Link to="/gallery/vehicles">
							<img src="https://lumiere-a.akamaihd.net/v1/images/Which-Star-Wars-Vehicle-is-Meant-For-You-AT-AT_e1161c77.jpeg?region=56%2C0%2C888%2C500"/>
						</Link>
					</div>
					<div>
						<Link to="/gallery/planets">
							<img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg"/>
						</Link>
					</div>
				</section>
			</main>
		</>
	);

}
