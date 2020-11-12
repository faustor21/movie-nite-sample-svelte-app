<script>
  import SearchForm from './SearchForm.svelte'
</script>

<style>
  header {
    height: 8rem;
    background-color: var(--color-primary-dark);
    color: white;
    padding: 1.2rem;
  }

  @media screen and (max-width: 800px) {
    header {
      height: 12rem;
    }

    header div {
      grid-template-columns: 1fr;
    }
  }

  header div {
    max-width: 140rem;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
  }

  header div h1 {
    font-weight: 300;
    font-size: 3.6rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .dot {
    height: 25px;
    width: 25px;
    background-color: var(--color-primary-light);
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.3rem;
  }
</style>

<header>
  <div>
    <a href="/#">
      <h1><span class="dot" />movie-nite</h1>
    </a>
    <SearchForm />
  </div>
</header>
