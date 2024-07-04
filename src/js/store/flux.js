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
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
			setPeople: people => {
				setStore({ people });
			},
			setPlanets: planets => {
				setStore({ planets });
			},
			setFavorites: favorites => {
				setStore({ favorites });
			},
			addFavorite: item => {
				const store = getStore();
				const updatedFavorites = [...store.favorites, item];
				setStore({ favorites: updatedFavorites });
			},
			removeFavorite: item => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(fav => fav !== item);
				setStore({ favorites: updatedFavorites });
			}
		}
	};
};

export default getState;

