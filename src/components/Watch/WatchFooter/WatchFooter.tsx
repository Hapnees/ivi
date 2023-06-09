import React, { FC } from 'react'
import HighlightButton from '@/components/UI/Buttons/HighlightButton/HighlightButton'
import style from './WatchFooter.module.scss'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

interface IProps {
  filmName: string
  mainImg: string
}

const WatchFooter: FC<IProps> = ({ filmName, mainImg }) => {
  const { t } = useTranslation('watch', { keyPrefix: 'watch-footer' })
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <h2 className={style.info__title}>
          {t('watch')} {filmName} {t('on-all-devices')}
        </h2>
        <p className={style.info__subtitle}>{t('app-on-devices')}</p>
        <HighlightButton>{t('connect-devices')}</HighlightButton>
      </div>

      <div className={style.images}>
        <Image
          className={style.images__tv}
          src='https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'
          width={1072}
          height={544}
          alt='Устройства для просмотра иви'
        />
        <Image
          className={style.images__tablet}
          src='https://www.ivi.ru/images/_ds/watchAllDevices/ipad-without-poster.png'
          width={400}
          height={272}
          alt='Устройства для просмотра иви'
        />
        <Image
          className={style.images__tv_poster}
          src={mainImg}
          width={400}
          height={226}
          alt='Постер'
        />
        <Image
          className={style.images__tablet_poster}
          src={mainImg}
          width={400}
          height={226}
          alt='Постер'
        />
      </div>
    </div>
  )
}

export default WatchFooter
