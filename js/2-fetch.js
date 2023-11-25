const input_pokemon = document.getElementById("input_pokemon");

const llamarApiAsyncAwait = async () => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${input_pokemon.value}`;
  try {
    const respuesta = await fetch(URL);
    const data = await respuesta.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// llamarApiAsyncAwait();

// const llamarApiThen = () => {
//   fetch(URL)
//     .then((respuesta) => {
//       console.log(respuesta);
//     })
//     .then((respuesta) => {
//       console.log(respuesta);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
