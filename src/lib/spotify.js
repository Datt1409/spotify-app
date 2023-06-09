import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-read-recently-played",
  "user-top-read",
  "user-read-playback-position",
  "user-follow-read",
  "user-follow-modify",
  "playlist-read-collaborative",
  "playlist-read-private",
  "streaming",
  "app-remote-control",
  "user-read-currently-playing",
  "user-read-playback-state",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
