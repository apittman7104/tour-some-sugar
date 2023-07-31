import { bookingList } from "./bookings.js"

let parentTag = document.querySelector(".booking-container");

parentTag.innerHTML = bookingList();