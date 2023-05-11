import { IMovieCard } from '@/types/movieCard.interface'
import Image from 'next/image'
import React, { FC, forwardRef } from 'react'
import style from './MovieCard.module.scss'
import MovieCardControls from './MovieCardControls/MovieCardControls'
import MovieCardInfo from './MovieCardInfo/MovieCardInfo'
import Link from 'next/link'

interface IProps {
  movie: IMovieCard
}

const MovieCard = forwardRef<HTMLDivElement, IProps>(({ movie }, ref) => {
  return (
<<<<<<< HEAD
    <div key={movie.id} className={style.wrapper} ref={ref}>
      <div className={style.wrapper_img}>
        <Image src={movie.img} alt='movie' className={style.img} fill />
      </div>
      <div className={style.hoverBlock}>
        <MovieCardControls />
        <MovieCardInfo block={movie} />
      </div>
      <div className={style.info}>
        <p className={style.info__title}>{movie.title}</p>
        <p
          className={
            movie.isFree
              ? style.info__subtitle
              : `${style.info__subtitle} ${style.not_free}`
          }
        >
          {movie.isFree ? 'Бесплатно' : 'Подписка'}
        </p>
      </div>
    </div>
=======
    <Link href={`/watch/${movie.id}`}>
      <div key={movie.id} className={style.wrapper}>
        <div className={style.wrapper_img}>
          <Image src={movie.mainImg} alt='movie' className={style.img} fill />
        </div>
        <div className={style.hoverBlock}>
          <MovieCardControls />
          <MovieCardInfo movie={movie} />
        </div>
        <p className={style.info__title}>{movie.name}</p>
      </div>
    </Link>
>>>>>>> 2968c9a251e14f27af4b292c4b4993b67cbe3e6f
  )
})

MovieCard.displayName = 'MovieCard'

export default MovieCard
