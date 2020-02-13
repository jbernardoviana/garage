import { fetchAndDisplayCars } from './car';
import { prepareNewCarForm } from './form';

// Fetch all the cars from our garage
// Display all the cars in the html

const GARAGE_SLUG = 'wagon';

// GET ALL THE CARS
// 1. Send AJAX request to the API to fetch all the cars
// 2. For each car
//    3. Insert a new car (<div>...</div>) in the cars table '.cars-list'

// <div class="car">
//   <div class="car-image">
//     <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
//   </div>
//   <div class="car-info">
//     <h4>Ferrari 308 GTS</h4>
//     <p><strong>Owner:</strong> Thomas Magnum</p>
//     <p><strong>Plate:</strong> 56E-478</p>
//   </div>
// </div>

fetchAndDisplayCars(GARAGE_SLUG);


// Add an event listener to the form
// Grab elements from the form an do a POST to the API

prepareNewCarForm(GARAGE_SLUG);


