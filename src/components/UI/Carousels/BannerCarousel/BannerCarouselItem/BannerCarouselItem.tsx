import HighlightButton from '@/components/UI/Buttons/HighlightButton/HighlightButton'
import Image from 'next/image'
import { IBannerCarouselItem } from '../../../../../types/IBannerCarouselItem'
import styles from './BannerCarouselItem.module.scss'
import { useTranslation } from 'next-i18next'

interface IBannerCarouselItemProps {
  item: IBannerCarouselItem
  transition: boolean
  speed: number
  active: boolean
}

const BannerCarouselItem = ({
  item,
  speed = 400,
  active = false,
  transition = true,
}: IBannerCarouselItemProps) => {
  const { t } = useTranslation('home')

  return (
    <article
      className={`${styles.element} ${active ? styles.element_active : ''}`}
      style={{
        transition: !transition
          ? 'none'
          : `transform ${speed}ms, opacity ${speed}ms`,
      }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{item.title}</h2>
        <h3 className={styles.subtitle}>{item.subtitle}</h3>
        <div
          className={`${styles.button} ${active ? styles.button_active : ''}`}
          style={{
            transition: !transition ? 'none' : `opacity ${speed}ms`,
          }}
        >
          <HighlightButton className={styles.highlight_button}>
            {t('show-compilation')}
          </HighlightButton>
        </div>
      </div>
      <div className={styles.background}>
        <Image src={item.imgUrl} alt='Banner' fill className={styles.image} />
        <Image
          src={item.imgUrlMobile}
          alt='Banner'
          fill
          className={`${styles.image} ${styles.image_mobile}`}
        />
      </div>
    </article>
  )
}

export default BannerCarouselItem