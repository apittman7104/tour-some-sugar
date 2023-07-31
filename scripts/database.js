const database = {
    venues: [
        {
            id: 1,
            name: "Venue A",
            address: "123 Main Street",
            squareFeet: 5000,
            occupancy: 200
        },
        {
            id: 2,
            name: "Venue B",
            address: "456 Oak Road",
            squareFeet: 7000,
            occupancy: 300
        },
        {
            id: 3,
            name: "Venue C",
            address: "789 Broadway",
            squareFeet: 3500,
            occupancy: 150
        },
    ],
    bands: [
        {
            id: 1,
            name: "The Beatles",
            members: 4,
            genre: "Rock",
            yearFormed: 1960,
          },
          {
            id: 2,
            name: "Led Zeppelin",
            members: 4,
            genre: "Rock",
            yearFormed: 1968,
          },
          {
            id: 3,
            name: "Queen",
            members: 4,
            genre: "Rock",
            yearFormed: 1970,
          },
          {
            id: 4,
            name: "Nirvana",
            members: 3,
            genre: "Grunge",
            yearFormed: 1987,
          },
          {
            id: 5,
            name: "Red Hot Chili Peppers",
            members: 4,
            genre: "Alternative Rock",
            yearFormed: 1983,
          },
    ],
    bookings: [
        {
            id: 1,
            date: "8/1/23",
            venueId: 1,
            bandId: 1,
        },
        {
            id: 2,
            date: "8/1/23",
            venueId: 2,
            bandId: 1,
        },
        {
            id: 3,
            date: "8/2/23",
            venueId: 3,
            bandId: 2,
        },
        {
            id: 4,
            date: "8/2/23",
            venueId: 1,
            bandId: 3,
        },
        {
            id: 5,
            date: "8/3/23",
            venueId: 2,
            bandId: 4,
        },
        {
            id: 6,
            date: "8/3/23",
            venueId: 3,
            bandId: 5,
        },
    ],
}

export const getVenues = () => {
    return database.venues.map(venue => venue);
}

export const getBands = () => {
    return database.bands.map(band => band);
}

export const getBookings = () => {
    return database.bookings.map(booking => booking);
}