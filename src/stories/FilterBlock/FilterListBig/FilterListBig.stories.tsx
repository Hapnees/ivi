import FilterGenreCarouselContent from '@/components/CarouselContents/FilterGenreCarouselContent/FilterGenreCarouselContent'
import FilterListBig from '@/components/FilterBlock/FilterListBig/FilterListBig'
import VioletButton from '@/components/UI/VioletButton/VioletButton'
import { filterCountryData } from '@/data/filterCountry.data'
import { filterGenreData } from '@/data/filterGenre.data'
import {
  IFilterBlockEl,
  IFilterListBigProps,
  IFilterTitle,
} from '@/types/filterBlock.interface'
import { Meta } from '@storybook/react'
import FilterListBigWrapper from './FilterListBigWrapper'

const meta: Meta = {
  title: 'FilterBlock/FilterListBig',
  parameters: {
    docs: {
      description: {
        component: 'Большой список фильтров. Находится на странице /movies',
      },
    },
  },
  component: FilterListBig,
  argTypes: {
    filterData: { table: { disable: true } },
    carouselData: { table: { disable: true } },
    list: { table: { disable: true } },
    carouselContent: { table: { disable: true } },
    carouselElementsView: {
      description: 'Число видимых элементов карусели',
    },
    carouselElementsMove: {
      description: 'На какое количество элементов двигаем карусель',
    },
    title: {
      description: 'Название фильтра',
      options: ['Жанры', 'Страны'],
      control: 'select',
    },
    query: {
      description: 'Название параметра',
      options: ['genre', 'country'],
      control: 'select',
    },
    unformattedStringedList: {
      name: 'filterElementsList',
      description: 'Список элементов фильтра. Пишем через запятую',
      control: {
        type: 'text',
      },
    },
  },
}

export const Genre = ({
  unformattedStringedList,
  ...props
}: Omit<IFilterListBigProps, 'list' | 'carouselContent' | 'carouselData'> & {
  title: IFilterTitle
  unformattedStringedList: string
}) => {
  const list = unformattedStringedList?.split(',').map((el, index) => ({
    title: el,
    param: `test${index + 1}`,
  }))

  return (
    <FilterListBigWrapper
      list={list}
      carouselContent={FilterGenreCarouselContent}
      carouselData={filterGenreData}
      {...props}
    />
  )
}

Genre.args = {
  query: 'genre',
  title: 'Жанры',
  unformattedStringedList:
    'Артхаус, Вестерн, Для детей, Зарубежные, Комедии, Мистические, Приключения, Советские, Ужасы, Биография, Военные, Документальные, Исторические, Криминал, Музыкальные, Русские, Спорт, Фантастика, Боевик, Детективы, Драмы, Катастрофы, Мелодрамы, По комиксам, Семейные, Триллеры, Фэнтези',
  carouselElementsView: 5,
  carouselElementsMove: 2,
}

export const Country = ({
  unformattedStringedList,
  ...props
}: Omit<IFilterListBigProps, 'list' | 'carouselContent' | 'carouselData'> & {
  title: IFilterTitle
  unformattedStringedList: string
}) => {
  const list = unformattedStringedList?.split(',').map((el, index) => ({
    title: el,
    param: `country${index + 1}`,
  }))

  return (
    <FilterListBigWrapper
      list={list}
      carouselContent={VioletButton}
      carouselData={filterCountryData}
      {...props}
    />
  )
}

Country.args = {
  query: 'country',
  title: 'Страны',
  unformattedStringedList:
    'Австралия, Беларусь, Великобритания, Гонконг, Ирландия, Казахстан, Колумбия, Новая Зеландия, Россия, Таиланд, Франция, ЮАР, Аргентина, Бельгия, Венгрия, Дания, Испания, Канада, Мексика, Норвегия, СССР, Турция, Швейцария, Южная Корея, Армения, Бразилия, Германия, Индия, Италия, Китай, Нидерланды, Польша, США, Финляндия, Швеция, Япония',
  carouselElementsView: 6,
  carouselElementsMove: 1,
}

export default meta