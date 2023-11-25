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

const agregarProducto = async () => {
  try {
    const resp = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });
    const json = await resp.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const actualizarProducto = async () => {
  try {
    const resp = await fetch(`${URL}/7`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    });
    const json = await resp.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const eliminarProducto = async () => {
  try {
    const resp = await fetch(`${URL}/32`, {
      method: "DELETE",
    });
    const json = await resp.json();

    if (json) {
      console.log(json);
    } else {
      console.log("No existe el producto");
    }
  } catch (error) {
    console.log(error);
  }
};
