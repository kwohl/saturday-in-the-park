const baseUrl = "http://localhost:5000"

export default {

    getAreasWithAttractions() {
        return fetch(`${baseUrl}/areas?_embed=attractions`)
            .then(response => response.json())
    },
    getAttractions() {
        return fetch(`${baseUrl}/attractions`)
            .then(response => response.json())
    },
    getItineraryInfo(customerId) {
        return fetch(`${baseUrl}/itinerary?customerId=${customerId}&_expand=attraction`)
            .then(response => response.json())
    },
    getCustomers() {
        return fetch(`${baseUrl}/customers`)
            .then(response => response.json())
    }
}