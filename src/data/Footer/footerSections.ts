import { IFooterListItem } from '@/types/IFooterListItem';

const sections: IFooterListItem[] = [
    {
        linkType: 'internal',
        url: '/',
        text: 'Мой Иви',
    },
    {
        linkType: 'external',
        url: 'https://www.ivi.ru/new',
        text: 'Что нового',
    },
    {
        linkType: 'internal',
        url: '/movies',
        text: 'Фильмы',
    },
    {
        linkType: 'external',
        url: 'https://www.ivi.ru/series',
        text: 'Сериалы',
    },
    {
        linkType: 'external',
        url: 'https://www.ivi.ru/animation',
        text: 'Мультфильмы',
    },
    {
        linkType: 'external',
        url: 'https://www.ivi.ru/tvplus',
        text: 'TV+',
    },
    {
        linkType: 'external',
        url: 'https://www.ivi.ru/goodmovies',
        text: 'Что посмотреть',
    },
];

export default sections;
