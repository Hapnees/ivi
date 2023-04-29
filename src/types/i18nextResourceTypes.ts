import auth_modal from '../../public/locales/ru/auth_modal.json';
import header from '../../public/locales/ru/header.json';
import home from '../../public/locales/ru/home.json';
import error404 from '../../public/locales/ru/error404.json';
import common from '../../public/locales/ru/common.json';
import footer from '../../public/locales/ru/footer.json';
import movies from '../../public/locales/ru/movies.json';

export interface Resources {
    auth_modal: typeof auth_modal;
    header: typeof header;
    home: typeof home;
    error404: typeof error404;
    common: typeof common;
    footer: typeof footer;
    movies: typeof movies;
}