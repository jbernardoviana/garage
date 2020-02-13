const addCar = (car) => {
  const carCard = `<div class="car">
                <div class="car-image">
                  <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}"/>
                </div>
                <div class="car-info">
                  <h4>${car.brand} ${car.model}</h4>
                  <p><strong>Owner:</strong>${car.owner}</p>
                  <p><strong>Plate:</strong>${car.plate}</p>
                </div>
              </div>`;
  document.querySelector('.cars-list').insertAdjacentHTML('beforeend', carCard);
};

const fetchAndDisplayCars = (slug) => {
  const url = `https://wagon-garage-api.herokuapp.com/${slug}/cars`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.forEach(addCar);
    });
};

export { fetchAndDisplayCars, addCar };
