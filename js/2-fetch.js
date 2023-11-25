const URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

const llamarApiAsyncAwait = async () => {
  try {
    const respuesta = await fetch(URL);
    const data = await respuesta.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
llamarApiAsyncAwait();

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
