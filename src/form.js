import { addCar } from './car';


const prepareNewCarForm = (slug) => {
  const form = document.querySelector('#new-car');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    createCar(slug);
  });
};

const createCar = (slug) => {
  const newCar = {
    brand: document.querySelector('#brand').value,
    model: document.querySelector('#model').value,
    plate: document.querySelector('#plate').value,
    owner: document.querySelector('#owner').value
  };
  const url = `https://wagon-garage-api.herokuapp.com/${slug}/cars`;

  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(newCar)
  })
    .then(response => response.json())
    .then((data) => {
      if (data.errors) {
        alert(JSON.stringify(data.errors));
      } else {
        addCar(data);
      }
    });
};

export { prepareNewCarForm };
