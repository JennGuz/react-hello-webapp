const apiUrl = "https://www.swapi.tech/api";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			films: [],
			species: [],
			starships: [],
			vehicles: [],
			planets: [],
			itemProperties: {},
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getCharacters: async () => {
				try {
					const res = await fetch(apiUrl + "/people");
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`)
					}
					const data = await res.json();
					setStore({ characters: data.results })

				} catch (error) {
					console.log(error);
				}
			},

			getFilms: async () => {
				try {
					const res = await fetch(`${apiUrl}/films/`);
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`);
					}
					const data = await res.json();
					setStore({ films: data.result })

				} catch (error) {
					console.log(error);
				}

			},

			getSpecies: async () => {
				try {
					const res = await fetch(`${apiUrl}/species/`);
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`);
					}
					const data = await res.json();
					setStore({ species: data.results })

				} catch (error) {
					console.log(error);
				}
			},

			getStarships: async () => {
				try {
					const res = await fetch(`${apiUrl}/starships/`);
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`);
					}
					const data = await res.json();
					setStore({ starships: data.results })

				} catch (error) {
					console.log(error);
				}

			},

			getVehicles: async () => {
				try {
					const res = await fetch(`${apiUrl}/vehicles/`);
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`);
					}
					const data = await res.json();
					setStore({ vehicles: data.results })

				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				try {
					const res = await fetch(`${apiUrl}/planets/`);
					if(!res.ok){
						throw new Error(`HTTP error! status: ${res.status}`);
					}
					const data = await res.json();
					setStore({ planets: data.results })

				} catch (error) {
					console.log(error);	
				}

			},

			getItemProperties: async (section, uid) => {
				try {
					const res = section === 'characters' ? await fetch(`${apiUrl}/people/${uid}`) : await fetch(`${apiUrl}/${section}/${uid}`);
					if (!res.ok) {
						throw new Error(`HTTP error! status: ${res.status}`)
					}
					console.log(res);
					const data = await res.json();
					setStore({ itemProperties: data.result.properties });
				} catch (error) {
					console.log(error);
				}
			},

			addFavorites: (item, section) => {
				const store = getStore();
				const actions = getActions();
				setStore({ favorites: [...store.favorites, {...item, section}] })
				// actions.saveInLocalStorage("favorites", JSON.stringify(store.favorites));
				console.log(store.favorites);
			},

			deleteFavorites: (itemId) => {
				const store = getStore();
				const newFavorites = store.favorites.filter((fav) => fav.uid !== itemId)
				setStore({ favorites: newFavorites });
				console.log(store.favorites);
			},

			// saveInLocalStorage: (key, value) => {
			// 	localStorage.setItem(key, value);
			// },

			// getFavoritesFromLocalStorage: () => {
			// 	const favorites = localStorage.getItem("favorites");
			// 	setStore({favorites : JSON.parse(favorites)})
			// 	// console.log(favorites, typeof favorites);
			// }
		}
	};
};

export default getState;
