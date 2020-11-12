<script>
  import Router from 'svelte-spa-router'

  import routes from './routes'

  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
</script>

<Header />
<Router {routes} />
<Footer />

<!--<script>
  import { onMount } from 'svelte'

  import { movies as moviesStore } from './stores/movies'
  import { search } from './api/movies'

  import Header from './components/Header.svelte'
  import Footer from './components/Footer.svelte'
  import MovieCard from './components/MovieCard.svelte'

  const handleSearch = async (e) => {
    moviesStore.set([])
    const searchTerm = e.detail
    moviesStore.set(await search(searchTerm))
  }

  onMount(async () => {
    handleSearch({ detail: 'love' })
  })
</script><style>
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

  .loading {
    font-size: 3rem;
    font-weight: 300;
    color: var(--color-grey-dark-3);
  }
</style><Header on:search={handleSearch} />
<main>
  <div class="movies">
    {#each $moviesStore as movie (movie.imdbID)}
      <MovieCard poster={movie.Poster} title={movie.Title} />
    {:else}
      <p class="loading">Loading...</p>
    {/each}
  </div>
</main>
<Footer /> -->
