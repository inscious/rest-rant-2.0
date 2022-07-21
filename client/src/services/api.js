import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const API = axios.create({ baseUrl: API_URL });

export const fetchPlace = (id) => API.get(`/places/${id}`);
export const fetchPlaces = () => API.get(`/places`);
export const addPlace = (newPlace) => API.post("places", newPlace);

export const deletePlace = (id) => API.delete(`/places/${id}`);
export const updatePlace = (id, updatedPlace) =>
    API.patch(`/places/${id}`, updatedPlace);
