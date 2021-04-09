const apiKey = "008f1e6099ecc48e990e3776784d447b";
const baseUrl = "https://www.skiddle.com/api/v1";
export const searchForEvents = (searchTerm: string) => {
  return fetch(
    `${baseUrl}/events/search?api_key=${apiKey}&keyword=${searchTerm}`
  ).then((response) => response.json());
};

export const getEventDetails = (eventId: string) => {
  return fetch(
    `${baseUrl}/events/${eventId}?api_key=${apiKey}`
  ).then((response) => response.json());
};

export const getArtistDetails = (artistId: string) => {
  return fetch(
    `${baseUrl}/artist/${artistId}?api_key=${apiKey}`
  ).then((response) => response.json());
};
