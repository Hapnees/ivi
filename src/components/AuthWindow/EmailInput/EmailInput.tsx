import Input from '@/components/UI/Input/Input'
import parentStyles from '../AuthWindow.module.scss'
import HighlightButton from '@/components/UI/HighlightButton/HighlightButton'
import BasicBtn from '@/components/UI/BasicBtn/BasicBtn'
import { validateEmail } from '@/utils/auth.util'
import { signIn } from 'next-auth/react'
import { FaGoogle, FaVk } from 'react-icons/fa'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './EmailInput.module.scss'

interface IEmailInputProps {
  emailInput: string
  setEmailInput: Dispatch<SetStateAction<string>>
  errorMessages: string[]
  setError: (error: string[]) => void
  resetError: () => void
  handleEmail: (email: string) => void
  className?: string
}

const EmailInput = ({
  emailInput,
  setEmailInput,
  errorMessages,
  setError,
  resetError,
  handleEmail,
  className = '',
}: IEmailInputProps) => {
  const { t } = useTranslation('auth_modal')

  const onClickContinueBtn = () => {
    let emailError = validateEmail(emailInput)
    if (emailError) {
      setError([emailError])
      return
    }
    handleEmail(emailInput)
  }

  const onChangeEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorMessages.length > 0) resetError()
    setEmailInput(event.target.value)
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.inputs}>
        <Input
          type='email'
          value={emailInput}
          onChange={event => onChangeEmailInput(event)}
          placeholder={t('email-placeholder')}
          autoFocus
        />
        <HighlightButton
          className={parentStyles.highlightbtn}
          disabled={emailInput ? false : true}
          onClick={onClickContinueBtn}
        >
          {t('continue')}
        </HighlightButton>
        <BasicBtn
          onClick={() => {
            signIn('google')
          }}
          btnType='icon'
          title={t('login.signin-google')}
          className={`${styles.basicbtn_google} ${styles.basicbtn}`}
        >
          <FaGoogle />
        </BasicBtn>
        <BasicBtn
          onClick={() => signIn('vk')}
          btnType='icon'
          title={t('login.signin-vk')}
          className={`${styles.basicbtn_vk} ${styles.basicbtn}`}
        >
          <FaVk />
        </BasicBtn>
      </div>
    </div>
  )
}

export default EmailInput
