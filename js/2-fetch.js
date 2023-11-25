const input_pokemon = document.getElementById("input_pokemon");

const llamarApiAsyncAwait = async () => {
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input_pokemon.value}`
    );
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
