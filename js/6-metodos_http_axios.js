const URL = "https://fakestoreapi.com/products";

const obtenerProductos = async () => {
  try {
    // const resp = await fetch(URL);
    // const json = await resp.json();
    const resp = await axios.get(URL);
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

const agregarProducto = async () => {
  try {
    const resp = await axios.post(
      URL,
      {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

const actualizarProducto = async () => {
  try {
    const resp = await axios.put(
      `${URL}/7`,
      {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

const eliminarProducto = async () => {
  try {
    const resp = await axios.delete(`${URL}/11`);

    if (resp.data) {
      console.log(resp.data);
    } else {
      console.log("No existe el producto");
    }
  } catch (error) {
    console.log(error);
  }
};
