import Image from 'next/image'
import style from './StaffsWindow.module.scss'
import { IMovieById } from '@/types/films.api.interface'
import { FC } from 'react'
import StaffCard from '../StaffCard/StaffCard'
import Link from 'next/link'

interface IProps {
  film: IMovieById
}

const StaffsWindow: FC<IProps> = ({ film }) => {
  const staffs = [
    { title: 'Режиссёры', list: film.directors },
    { title: 'Актёры', list: film.actors },
    { title: 'Операторы', list: film.operators },
    { title: 'Художники', list: film.artists },
    { title: 'Сценаристы', list: film.scenario },
    { title: 'Монтаж', list: film.compositors },
  ]

  return (
    <div className={style.wrapper} onClick={e => e.stopPropagation()}>
      <div className={style.modal_conteiner}>
        <div className={style.modal_info}>
          <div className={style.modal_info_title}>
            {film.name}: актеры и создатели фильма
          </div>
          <ul className={style.staff_grid_outer}>
            {staffs.map(
              (staffCard, index) =>
                !!staffCard.list.length && (
                  <li key={index}>
                    <h3 className={style.modal_info_subtitle}>
                      {staffCard.title}
                    </h3>
                    <ul className={style.staff_grid}>
                      {staffCard.list.map(staff => (
                        <li key={staff.id}>
                          <Link href={`/person/${staff.id}`}>
                            <StaffCard staff={staff} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
            )}
          </ul>
        </div>

        <div className={style.modal_poster}>
          <div className={style.modal_poster_img}>
            <Image src={film.mainImg} alt='постер' fill />
          </div>
          <div className={style.modal_poster_rating}>8,9</div>
          <div className={style.modal_poster_genres}>
            {film.year}, {film.countries} {film.genres}
          </div>
          <div className={style.modal_poster_duratin}>
            <Image
              src='/film/clockIcon.png'
              width={16}
              height={16}
              alt='иконка'
            />
            {film.time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffsWindow