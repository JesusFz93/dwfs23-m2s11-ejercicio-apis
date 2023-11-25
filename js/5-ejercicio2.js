const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");

const agregarUsuario = async () => {
  try {
    const resp = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: firstname.value,
          lastname: lastname.value,
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    });
    const json = await resp.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
