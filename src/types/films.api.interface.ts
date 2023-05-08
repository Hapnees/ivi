export interface IStaff {
  id: number
  name: string
}

export interface IFilmsGetRequest {
  order?: string
  page?: number
  take?: number
  orderBy?: string
  genres?: string[]
  genres_en?: string[]
  countries?: string[]
  actors?: string[]
  directors?: string[]
}

export interface IFilmsgGetResponse {
  id: number
  name: string
  name_en: string
  year: number
  countries: { name: string }[]
  genres: { name: string; name_en: string }[]
  tagline: string
  directors: IStaff[]
  artists: IStaff[]
  actors: IStaff[]
  montages: IStaff[]
  compositors: IStaff[]
  scenario: IStaff[]
  operators: IStaff[]
  age: string
  description: string
  mainImg: string
  time: string
  premiereRU: string
  premiere: string
}

export interface IMovie
  extends Omit<IFilmsgGetResponse, 'countries' | 'genres'> {
  countries: string
  genres: string
}
