import { IFilterGetResponse, IStaff } from '@/types/staffs.interface'
import { staffsAPI } from '@/api/queries/staffs.api'
import { checkObjHaveProperties } from '@/utils/checkObjHaveProperties.utils'
import { ICRUDGenre } from '@/types/ICrudMovie'

const staffRequiredProperties = ['id', 'name']

const crudGenreRequiredProperties = [
  'id',
  'name',
  'name_en',
  'createdAt',
  'updatedAt',
]

describe('STAFFS API', () => {
  let genres: IFilterGetResponse[]
  let countries: IFilterGetResponse[]
  let directors: IStaff[]
  let actors: IStaff[]
  let staffById: IStaff | undefined

  let crudGenres: ICRUDGenre[]

  beforeAll(async () => {
    genres = await staffsAPI.getGenres('ru')
    countries = await staffsAPI.getCountries()
    directors = await staffsAPI.getDirectors()
    actors = await staffsAPI.getActors()
    crudGenres = await staffsAPI.getCrudGenres()
    staffById = await staffsAPI.getStaffById(12)
  })

  // Проверка полей жанров
  it('Check genres properties', () => {
    genres.map(genre => checkObjHaveProperties(genre, staffRequiredProperties))
  })

  // Проверка полей стран
  it('Check countries properties', () => {
    countries.map(country =>
      checkObjHaveProperties(country, staffRequiredProperties)
    )
  })

  // Проверка полей режиссёров
  it('Check directors properties', () => {
    directors.map(director =>
      checkObjHaveProperties(director, staffRequiredProperties)
    )
  })

  // Проверка полей актёров
  it('Check actors properties', () => {
    actors.map(actor => checkObjHaveProperties(actor, staffRequiredProperties))
  })

  // Проверка полей круда жанров
  it('Check crud genre properties', () => {
    crudGenres.map(actor =>
      checkObjHaveProperties(actor, crudGenreRequiredProperties)
    )
  })

  it('Check staffs by id', () => {
    expect(staffById).toBeTruthy()
    if (staffById) {
      checkObjHaveProperties(staffById, staffRequiredProperties)
    }
  })
})

describe('STAFFS API ERRORS', () => {
  let errorGenres: IFilterGetResponse[]
  //let errorCountries: IFilterGetResponse[]
  let errorDirectors: IStaff[]
  let errorActors: IStaff[]
  let errorCrudGenres: ICRUDGenre[]
  let errorStaffById: IStaff | undefined

  beforeAll(async () => {
    errorGenres = await staffsAPI.getGenres('ru', { page: -1 })
    errorDirectors = await staffsAPI.getDirectors({ page: -1 })
    errorActors = await staffsAPI.getActors({ page: -1 })

    errorCrudGenres = await staffsAPI.getCrudGenres({ page: -1 })
    errorStaffById = await staffsAPI.getStaffById(-1)
  })

  // Проверяем ошибку жанров
  it('Check genres error', () => {
    expect(errorGenres).toStrictEqual([])
  })

  // Проверяем ошибку режиссёров
  it('Check directors error', () => {
    expect(errorDirectors).toStrictEqual([])
  })

  // Проверяем ошибку актёров
  it('Check actors error', () => {
    expect(errorActors).toStrictEqual([])
  })

  // Проверяем ошибку круда жанров
  it('Check crud genres error', () => {
    // FIXME: Не считает page=-1 за ошибку
    expect(errorCrudGenres).toStrictEqual([])
  })

  // Проверяем ошибку участника по id
  it('Check staff by id error', () => {
    expect(!errorStaffById).toBeTruthy()
  })
})