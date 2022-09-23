interface IMovie {
  adult:boolean
  backdrop_path:string
  genre_ids:number[]
  id:number
  original_language:string
  original_title:string
  overview:string
  popularity:number
  poster_path:string
  release_date:string
  title:string
  video:boolean
  vote_average:number
  vote_count:number
}

type MovieState = {
  search: string
  movies: IMovie[]
}

type MovieStore = {
  search: string
  movies: MovieResult
}

type MovieResult = {
  page:number
  results:IMovie[]
  total_pages:number
  total_results:number
}

type MovieAction = {
  type: string
  Movie: IMovie
}

type SearchAction = {
  search: string
}

type DispatchType = (args: MovieAction) => MovieAction

