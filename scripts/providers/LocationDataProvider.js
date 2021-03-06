let locations = []

export const useLocations = () => locations.slice()

export const getLocations = () => fetch("http://localhost:3000/locations")
    .then(res => res.json())
    .then(parsedLocations => locations = parsedLocations)