import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react'
import style from './Input.module.scss'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface ICustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  charHideBtn?: boolean
  ref?: Ref<HTMLInputElement>
}

const Input: FC<ICustomInput> = ({
<<<<<<< HEAD
    type = 'text',
    charHideBtn = false,
    placeholder,
    value,
    ref,
    className: propsClassName,
    autoFocus,
    ...props
=======
  type = 'text',
  charHideBtn = false,
  placeholder,
  value,
  ref,
  className: propsClassName,
  autoFocus,
  style: propsStyle,
  ...props
>>>>>>> 2968c9a251e14f27af4b292c4b4993b67cbe3e6f
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [focus, setFocus] = useState(false)
  const [hideChars, setHideChars] = useState(true)

  const inputClassName = type === 'number' ? style.number : style.text
  const placeholderActive = active ? style.placeholder_active : ''

  useEffect(() => {
    if (inputRef.current?.value) {
      setActive(true)
    } else if (!inputRef.current?.value && !focus) {
      setActive(false)
    }
  }, [value])

  useEffect(() => {
    if (autoFocus) {
      setActive(true)
    }
  }, [autoFocus])

<<<<<<< HEAD
    return (
        <div className={style.wrapper}>
            <label className={style.label}>
                <input
                    type={hideChars ? type : 'text'}
                    className={`${propsClassName} ${style.input} ${inputClassName}`}
                    placeholder={type === 'number' ? placeholder : ''}
                    value={value}
                    {...props}
                    onFocus={() => {
                        setActive(true);
                        setFocus(true);
                    }}
                    onBlur={() => {
                        if (!inputRef.current?.value) {
                            setActive(false);
                            setFocus(false);
                        }
                    }}
                    ref={(element) => {
                        (inputRef as MutableRefObject<HTMLInputElement | null>).current = element;
                        if (ref) {
                            if (typeof ref === 'function') {
                                ref(element);
                            } else {
                                (ref as MutableRefObject<HTMLInputElement | null>).current =
                                    element;
                            }
                        }
                    }}
                    autoFocus={autoFocus}
                />
                {type !== 'number' && (
                    <div
                        className={`${style.placeholder} ${placeholderActive}`}
                        ref={placeholderRef}>
                        <span
                            className={`${style.placeholder__text} ${
                                active ? style.placeholder__text_active : ''
                            }`}>
                            {placeholder}
                        </span>
                    </div>
                )}
            </label>
            {charHideBtn && (
                <span
                    className={style.hideicon}
                    onClick={() => {
                        setHideChars((prev) => !prev);
                    }}
                    style={{ color: inputRef.current?.value ? '#1f1b2e' : '#a5a1b2' }}>
                    {hideChars ? <FiEyeOff /> : <FiEye />}
                </span>
            )}
        </div>
    );
};
=======
  return (
    <div className={`${style.wrapper} ${propsClassName}`} style={propsStyle}>
      <label className={style.label}>
        <input
          type={hideChars ? type : 'text'}
          className={`${style.input} ${inputClassName}`}
          placeholder={type === 'number' ? placeholder : ''}
          value={value}
          {...props}
          onFocus={() => {
            setActive(true)
            setFocus(true)
          }}
          onBlur={() => {
            if (!inputRef.current?.value) {
              setActive(false)
              setFocus(false)
            }
          }}
          ref={element => {
            ;(inputRef as MutableRefObject<HTMLInputElement | null>).current =
              element
            if (ref) {
              if (typeof ref === 'function') {
                ref(element)
              } else {
                ;(ref as MutableRefObject<HTMLInputElement | null>).current =
                  element
              }
            }
          }}
          autoFocus={autoFocus}
        />
        {type !== 'number' && (
          <div
            className={`${style.placeholder} ${placeholderActive}`}
            ref={placeholderRef}
          >
            <span
              className={`${style.placeholder__text} ${
                active ? style.placeholder__text_active : ''
              }`}
            >
              {placeholder}
            </span>
          </div>
        )}
      </label>
      {charHideBtn && (
        <span
          className={style.hideicon}
          onClick={() => {
            setHideChars(prev => !prev)
          }}
          style={{ color: inputRef.current?.value ? '#1f1b2e' : '#a5a1b2' }}
        >
          {hideChars ? <FiEyeOff /> : <FiEye />}
        </span>
      )}
    </div>
  )
}
>>>>>>> 2968c9a251e14f27af4b292c4b4993b67cbe3e6f

export default Input
