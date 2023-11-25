const promesa = new Promise((resolve, reject) => {
  const usuarios = [
    // {
    //   id: 1,
    //   nombre: "Jesus",
    //   activo: false,
    // },
    // {
    //   id: 2,
    //   nombre: "Linda",
    //   activo: true,
    // },
  ];

  if (usuarios.length > 0) {
    const resp = {
      usuarios,
      msg: "Usuarios obtenidos",
    };

    resolve(resp);
  } else {
    const resp = {
      usuarios,
      msg: "No existen usuarios",
    };

    reject(resp);
  }
});

const llamarApiThen = () => {
  promesa
    .then((respuesta) => {
      console.log(respuesta);
    })
    .catch((error) => {
      console.log(error);
    });
};

const llamarApiAsyncAwait = async () => {
  try {
    const respuesta = await promesa;
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

// llamarApiThen();
llamarApiAsyncAwait();
