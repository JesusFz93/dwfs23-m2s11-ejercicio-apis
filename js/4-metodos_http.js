const URL = "https://fakestoreapi.com/products";

const obtenerProductos = async () => {
  try {
    const resp = await fetch(URL);
    const json = await resp.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
