import { IFilterBlockEl } from '@/types/filterBlock.interface'
import { DetailedHTMLProps, FC, HTMLAttributes, RefObject } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import style from './FilterTab.module.scss'
import { useTranslation } from 'next-i18next'
import { normalizeKey } from '@/utils/normalize.utils'

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selectFilter: () => void
  filter?: IFilterBlockEl
  paramValue?: string
  elementRef?: RefObject<HTMLElement>
}

const FilterTab: FC<IProps> = ({
  selectFilter,
  filter,
  paramValue,
  children,
  elementRef,
}) => {
  const titleClassName = `${style.title} ${
    filter?.isExpand ? style.title__active : ''
  }`

  const arrowClassName = `${style.arrow} ${
    filter?.isExpand ? style.arrow__active : ''
  }`

  const { t } = useTranslation('movies', { keyPrefix: 'filters' })

  return (
    <article className={style.wrapper} ref={elementRef}>
      <div className={titleClassName} onClick={selectFilter}>
        <div>
          <h1>{t(normalizeKey(filter?.title ?? 'Фильтр'))}</h1>
          {!!paramValue && <p className={style.param}>{paramValue}</p>}
        </div>
        <MdArrowBackIosNew className={arrowClassName} />
      </div>

      {children}
    </article>
  )
}

export default FilterTab
