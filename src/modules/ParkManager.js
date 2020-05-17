const baseUrl = "http://localhost:5000"

export default {

    getAreasWithAttractions() {
        return fetch(`${baseUrl}/areas?_embed=attractions`)
            .then(response => response.json())
    },
    getAttractions() {
        return fetch(`${baseUrl}/attractions`)
            .then(response => response.json())
    }
}