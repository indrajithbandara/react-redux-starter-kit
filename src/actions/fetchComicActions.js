// TODO: Import redux-api-middleware and fetch w/ onSuccess, onFailure, onWarning

export const FETCH_COMICS = 'ADD_TODO'
const API_URL="https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";

export function fetchComics() {
  return { type: FETCH_COMICS }
}
