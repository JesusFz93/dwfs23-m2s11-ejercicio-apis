const inputName = document.getElementById("inputName");

const obtenerClima = async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputName.value}&appid=616629f9acdc3b22b8b09553e632e5da`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
