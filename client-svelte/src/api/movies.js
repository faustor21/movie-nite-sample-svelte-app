const URL = 'http://localhost:3000/?'

export const search = async (searchTerm) => {
  const response = await fetch(`${URL}s=${searchTerm}`)
  const { Search } = await response.json()
  console.log(Search)

  return Search
}

export const getMovie = async (id) => {
  const response = await fetch(`${URL}i=${id}`)
  const movie = await response.json()

  return movie
}
