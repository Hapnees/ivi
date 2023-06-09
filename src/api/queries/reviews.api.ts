import {
    IReviewGetResponse,
    IReviewPostRequest,
    IReviewPutRequest,
} from '@/types/api/reviews.api.interface';
import { customAxios } from './customAxios';

export const reviewsAPI = {
    getFilmReviewCount(id: number) {
        return getFilmReviewCount(id);
    },
    getFilmReviews(id: number) {
        return getFilmReviews(id);
    },
    getFilmReviewById(id: number) {
        return getFilmReviewById(id);
    },
    getComments(film_id: number, parent_id: number) {
        return getComments(film_id, parent_id);
    },
    postFilmReview(data: IReviewPostRequest, accessToken: string | null) {
        return postFilmReview(data, accessToken);
    },
    putFilmReview(data: IReviewPutRequest, accessToken: string | null) {
        return putFilmReview(data, accessToken);
    },
};

/*
  * Получить количество отзывов

  * @param {number} id - id фильма

  * @returns Promise<number>

*/

const getFilmReviewCount = async (id: number): Promise<number> => {
    try {
        const response = await customAxios.get<number>(`/reviews/count/${id}`);
        return response.data;
    } catch (_) {
        return 0;
    }
};

/*
  * Получить родительские комментарии к фильму

  * @param {number} id - id фильма

  * @returns Promise<IReviewGetResponse[]>

*/

const getFilmReviews = async (id: number): Promise<IReviewGetResponse[]> => {
    try {
        const response = await customAxios.get<IReviewGetResponse[]>(`/reviews/parents/${id}`);
        return response.data;
    } catch (_) {
        return [];
    }
};

/*
  * Получить все дочерние комментарии

  * @param {number} film_id - id фильма
  * @param {number} parent_id - id отзыва
  
  * @returns Promise<IReviewGetResponse[]>

*/

const getComments = async (film_id: number, parent_id: number): Promise<IReviewGetResponse[]> => {
    try {
        const response = await customAxios.get<IReviewGetResponse[]>(
            `/reviews/film/${film_id}/${parent_id}`
        );
        return response.data;
    } catch (_) {
        return [];
    }
};

/*
  * Получить отзыв по id

  * @param {number} id - id отзыва
  
  * @returns Promise<IReviewGetResponse | null>

*/

const getFilmReviewById = async (id: number): Promise<IReviewGetResponse | undefined> => {
    try {
        const response = await customAxios.get<IReviewGetResponse>(`/reviews/${id}`);
        return response.data;
    } catch (_) {
        return undefined;
    }
};

/*
  * Создать отзыв

  * @param {IReviewPostRequest} data - отзыв
  * @param {string | null} accessToken - токен
  
  * @returns Promise<IReviewGetResponse | null>

*/

const postFilmReview = async (
    data: IReviewPostRequest,
    accessToken: string | null
): Promise<IReviewGetResponse | null> => {
    try {
        const response = await customAxios.post<IReviewGetResponse>(`/reviews`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (_) {
        return null;
    }
};

/*
  * Обновить отзыв

  * @param {IPutFilmReviewData} data - отзыв
  * @param {string | null} accessToken - токен
  
  * @returns Promise<IReviewGetResponse | null>

*/

const putFilmReview = async (
    data: IReviewPutRequest,
    accessToken: string | null
): Promise<IReviewGetResponse | null> => {
    try {
        const response = await customAxios.put<IReviewGetResponse>(`/reviews`, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (_) {
        return null;
    }
};
