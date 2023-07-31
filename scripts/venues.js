import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        let output = ""
        if (clickTarget.dataset.type === "venue") {
            for (const booking of bookings) {
                if (booking.venueId === parseInt(clickTarget.dataset.id)) {
                    for (const band of bands) {
                        if (band.id === booking.bandId) {
                            output += `${band.name}\n`
                        }
                    }
                }
            }
            window.alert(output);
        }
    }
)

export const venueList = () => {
    let htmlString = "<ul>"
    for (const venue of venues) {
        htmlString += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}