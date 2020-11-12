# Movie-Nite small proxy server

This is a simple server that it's whole purpose is to serve as a proxy to the OMDb API.

## First get your API KEY from [OMDb API](https://www.omdbapi.com/) and then:

```bash
cd server
echo "OMDB_API_KEY=Your_API_Key" > .env
npm install
npm run dev
```
