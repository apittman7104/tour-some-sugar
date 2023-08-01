import { getBands, getBookings, getVenues } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        if (clickTarget.dataset.type === "band") {
            const bookings = getBookings()
            const venues = getVenues()
            let output = ""

            for (const booking of bookings) {
                if (booking.bandId === parseInt(clickTarget.dataset.id)) {
                    for (const venue of venues) {
                        if (venue.id === booking.venueId) {
                            output += `${venue.name}\n`
                        }
                    }
                }
            }
            window.alert(output)
        }
    }
)

export const bandList = () => {
    const bands = getBands();
    let htmlString = "<ul>"

    for (const band of bands) {
        htmlString += `<li data-type="band" data-id="${band.id}">${band.name}</li>`
    }

    htmlString += "</ul>"
    return htmlString
}