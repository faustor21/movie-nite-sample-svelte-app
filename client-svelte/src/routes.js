import Home from './pages/Home.svelte'
import MovieDetail from './pages/MovieDetail.svelte'
import NotFound from './pages/NotFound.svelte'

export default {
  // Exact path
  '/': Home,

  '/movie/:id': MovieDetail,

  // Catch-all
  // This is optional, but if present it must be the last
  '*': NotFound,
}
