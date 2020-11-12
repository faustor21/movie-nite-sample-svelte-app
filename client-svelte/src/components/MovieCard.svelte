<script>
  export let poster = '' // The poster image that goes in movie-card background
  export let title = ''
</script>

<style>
  .movie-card {
    /* background-image: url({poster}); */
    width: 30rem;
    height: 46.6rem;
    position: relative;
  }

  .movie-card h3 {
    width: 100%;
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--color-primary-light);
    padding: 2.5rem;
    background-color: grey;
    text-align: center;
    position: absolute;
    bottom: 0;
    opacity: 0.9;
  }
</style>

<div class="movie-card" style="background-image: url({poster});">
  <h3 class="movie-name">{title}</h3>
</div>
