import { IFilmsGetRequest } from '@/types/api/films.api.interface'
import { formatCapitalize } from './capitalize.format'
import { ParsedUrlQuery } from 'querystring'
/*
  * @param {ParsedUrlQuery | undefined} queryParams - параметры в адресной
    строке
  * @param {string} locale - локаль
  * @returns IFilmsGetRequest - параметры для запроса

*/
export const formatFilmsParams = (
  queryParams: ParsedUrlQuery | undefined,
  locale = 'ru'
): IFilmsGetRequest => {
  if (!queryParams) return {}

  const genres = locale === 'ru' ? 'genres' : 'genres_en'

  const defaultParams: IFilmsGetRequest = {
    take: 14,
    page: 1,
  }
  const currentParams: IFilmsGetRequest = { ...defaultParams }

  for (let param in queryParams) {
    let paramValue = queryParams[param]
    if (!paramValue) continue

    if (
      [genres, 'countries', 'director', 'actor', 'scoreAVG'].includes(param)
    ) {
      paramValue = (paramValue as string).split(',')

      currentParams[
        param as keyof Omit<
          typeof currentParams,
          'take' | 'page' | 'order' | 'orderBy'
        >
      ] =
        param === genres
          ? paramValue.map(genre => formatCapitalize(genre, { reverse: true }))
          : paramValue
    } else {
      currentParams[
        param as keyof Pick<typeof currentParams, 'order' | 'orderBy'>
      ] = paramValue as string
    }
  }

  return currentParams
}
