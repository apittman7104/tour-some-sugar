import { bandList } from "./bands.js";
import { bookingList } from "./bookings.js"
import { venueList } from "./venues.js";

let parentTag = document.querySelector(".booking-container");
parentTag.innerHTML = bookingList();

parentTag = document.querySelector(".venue-container")
parentTag.innerHTML = venueList();

parentTag = document.querySelector(".band-container")
parentTag.innerHTML = bandList();