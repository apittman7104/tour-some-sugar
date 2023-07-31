import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands();

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "booking") {
            for (const band of bands) {
                if (band.id === parseInt(clickTarget.dataset.bandid)) {
                    window.alert(`${band.name}
                    ${band.genre}
                    ${band.members} members
                    Formed in ${band.yearFormed}`)
                }
            }
        }
    }
)

export const bookingList = () => {
    const bookings = getBookings();
    let htmlString = "<ul>"

    for (const booking of bookings) {
        for (const band of bands) {
            if (band.id === booking.bandId) {
                htmlString += `<li data-type="booking" data-bandid="${band.id}">${band.name} is playing at `
            }
        }
        for (const venue of getVenues()) {
            if (venue.id === booking.venueId) {
                htmlString += `${venue.name} on `
            }
        }
        htmlString += `${booking.date}.</li>`
    }

    htmlString += "</ul>"
    return htmlString
}