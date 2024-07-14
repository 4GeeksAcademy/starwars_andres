const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			detailedCharacter: [],
			detailedVehicle: [],
			detailedPlanet: [],
			urlBase: "https://swapi.dev/api",
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
			]
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {

			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},
			getPeople: async () => {
				try {
					const response = await fetch(`${getStore().urlBase}/people`);
					const data = await response.json();
					setStore({ people: data.results });
					console.log('People data:', data.results);
				} catch (error) {
					console.error('Error fetching people:', error);
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch(`${getStore().urlBase}/vehicles`);
					const data = await response.json();
					setStore({ vehicles: data.results });
					console.log('Vehicles data:', data.results);
				} catch (error) {
					console.error('Error fetching vehicles:', error);
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch(`${getStore().urlBase}/planets`);
					const data = await response.json();
					setStore({ planets: data.results });
					console.log('Planets data:', data.results);
				} catch (error) {
					console.error('Error fetching planets:', error);
				}
			},
			addFavorite: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFavorite: item => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.name !== item.name) });
			},

			getCharacterDetails: async (id) => {
				try {
					const response = await fetch(`${getStore().urlBase}/people/${id}`);
					const data = await response.json();
					setStore({ detailedCharacter: data });
					console.log('Character details:', data);
				} catch (error) {
					console.error('Error fetching character details:', error);
				}
			},

			getPlanetDetails: async (id) => {
				try {
					const response = await fetch(`${getStore().urlBase}/planets/${id}`);
					const data = await response.json();
					setStore({ detailedPlanet: data });
					console.log('Planet details:', data);
				} catch (error) {
					console.error('Error fetching planet details:', error);
				}
			},
			
			getVehicleDetails: async (id) => {
				try {
					const response = await fetch(`${getStore().urlBase}/vehicles/${id}`);
					const data = await response.json();
					setStore({ detailedVehicle: data });
					console.log('Vehicle details:', data);
				} catch (error) {
					console.error('Error fetching planet details:', error);
				}
			},
		}
	};
};

export default getState;