<script>
  import { onMount } from 'svelte'

  import { movies as moviesStore, lastSearch } from '../stores/movies'
  import { search } from '../api/movies'

  import MovieCard from '../components/MovieCard.svelte'
  import Loading from '../components/Loading.svelte'

  onMount(async () => {
    moviesStore.set([])
    if (!$lastSearch || $lastSearch.trim().length === 0)
      moviesStore.set(await search('love'))
    else moviesStore.set(await search($lastSearch))
  })
</script>

<style>
  .movies {
    max-width: 95rem;
    min-height: 80rem;
    margin: 1rem auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, auto));
    justify-content: center;
    column-gap: 1rem;
    row-gap: 1rem;
  }
</style>

<main>
  <div class="movies">
    {#each $moviesStore as movie (movie.imdbID)}
      <a href="#/movie/{movie.imdbID}">
        <MovieCard poster={movie.Poster} title={movie.Title} />
      </a>
    {:else}
      <Loading />
    {/each}
  </div>
</main>
