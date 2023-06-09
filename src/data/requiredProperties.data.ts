export const filmsRequiredProperites = [
  'id',
  'name',
  'name_en',
  'year',
  'countries',
  'genres',
  'tagline',
  'scoreAVG',
  'age',
  'description',
  'mainImg',
  'time',
  'premiereRU',
  'premiere',
  'scoreAVG',
  'countScore',
]

export const crudFilmsRequiredProperties = [
  'id',
  'name',
  'name_en',
  'type',
  'mainImg',
  'year',
  'tagline',
  'budget',
  'fees',
  'feesUS',
  'feesRU',
  'premiere',
  'premiereRU',
  'scoreAVG',
  'countScore',
  'releaseDVD',
  'releaseBluRay',
  'age',
  'ratingMPAA',
  'time',
  'description',
  'scoreAVG',
  'createdAt',
  'updatedAt',
  'countries',
  'genres',
]

export const specificFilmRequiredProperites = [
  ...filmsRequiredProperites,
  'directors',
  'artists',
  'actors',
  'montages',
  'compositors',
  'scenario',
  'operators',
]

export const crudGenreRequiredProperties = [
  'id',
  'name',
  'name_en',
  'createdAt',
  'updatedAt',
]

export const staffRequiredProperties = ['id', 'name', 'type']
export const filterRequiredProperties = ['id', 'name']

export const reviewRequiredProperties = [
  'id',
  'text',
  'user_id',
  'film_id',
  'parent',
  'user_name',
  'user_email',
  'createdAt',
]
