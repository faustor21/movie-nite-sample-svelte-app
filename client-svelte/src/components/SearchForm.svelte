<script>
  import { push, location } from 'svelte-spa-router'

  import { movies as moviesStore, lastSearch } from '../stores/movies'
  import { search } from '../api/movies'

  let searchTerm = ''

  const handleSubmit = async () => {
    lastSearch.set(searchTerm)
    // Navigate to index
    if ($location !== '/') {
      push('/')
    } else {
      moviesStore.set([])
      moviesStore.set(await search(searchTerm))
    }
  }
</script>

<style>
  form {
    margin-top: 1rem;
  }

  input[type='text'] {
    width: 100%;
    border: 0;
    padding: 0.8rem;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    name="search"
    placeholder="Search for your favorite movies"
    bind:value={searchTerm} />
</form>
