<script>
  import { onMount } from 'svelte'

  import { getMovie } from '../api/movies'

  import Loading from '../components/Loading.svelte'

  let movie

  onMount(async () => {
    movie = await getMovie(params.id)
  })

  export let params = {}
</script>

<style>
  main {
    max-width: 80rem;
    min-height: 80rem;
    margin: 1rem auto;
  }

  .movie-detail {
    background-color: var(--color-primary-dark-2);

    display: grid;
    grid-template-columns: repeat(2, minmax(30rem, auto));
  }

  .movie-info {
    color: white;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  h1 {
    font-size: 3rem;
    margin-top: 0.3rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 0.6rem;
  }

  hr {
    margin: 1.5rem 0;
    border: none;
    border-top: 3px dashed white;
  }

  h3 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  h3:last-of-type {
    margin-bottom: 0;
  }

  h3 span {
    font-weight: 300;
  }

  p {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }

  .loading {
    text-align: center;
  }

  .back {
    color: var(--color-grey-dark-2);
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-decoration: none;
  }
</style>

<main>
  <a href="#/" class="back">&larr; Back</a>
  {#if movie}
    <div class="movie-detail">
      <div class="poster">
        <img src={movie.Poster} alt="{movie.Title} Poster" />
      </div>

      <div class="movie-info">
        <h1>{movie.Title}</h1>
        <h2>Year: {movie.Year}</h2>
        <hr />
        <h3>Runtime: <span>{movie.Runtime}</span></h3>
        <h3>Director: <span>{movie.Director}</span></h3>
        <h3>Genre: <span>{movie.Genre}</span></h3>
        <h3>Actors: <span>{movie.Actors}</span></h3>
        <h3>Plot:</h3>
        <p>{movie.Plot}</p>
      </div>
    </div>
  {:else}
    <div class="loading">
      <Loading />
    </div>
  {/if}
</main>
