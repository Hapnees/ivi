import { delay } from '@/utils/delay'
import setLocaleCookie from '@/utils/localization.utils'
import Router, { useRouter } from 'next/router'
import Switch from '../UI/Switch/Switch'
import { FC } from 'react'

const switchSpeed = 200

interface IProps {
  className?: string
}

const LanguageChanger: FC<IProps> = ({ className = '' }) => {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const onToggleLanguageClick = async (newLocale: string) => {
    setLocaleCookie(newLocale)
    await router.push({ pathname, query }, asPath, { locale: newLocale })
    await delay(switchSpeed * 1.25)
    Router.reload()
  }
  return (
    <Switch
      left={'РУ'}
      right={'EN'}
      startLeft={router.locale === 'ru'}
      callbackLeft={() => {
        onToggleLanguageClick('ru')
      }}
      callbackRight={() => {
        onToggleLanguageClick('en')
      }}
      speedms={switchSpeed}
      className={className}
    />
  )
}

export default LanguageChanger
