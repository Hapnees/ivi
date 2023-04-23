import { IFilterListEl } from '@/types/filterBlock.interface'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useGetParam } from './useGetParam'

type IFilterType = 'radio'

interface IOptions {
  filterType?: IFilterType
  extraValues?: string[]
}

export const useSetListParam = (
  defaultValue: IFilterListEl[],
  query: string,
  options?: IOptions
) => {
  const param = useGetParam(query)
  const router = useRouter()

  const [list, setList] = useState<IFilterListEl[]>(defaultValue)

  const onClickListEl = (_param: string) => () => {
    let resultParams: string | undefined = ''
    const splittedParams = param ? param.split(',') : []

    if (options?.extraValues?.includes(_param)) {
      resultParams === undefined
    } else {
      if (options?.filterType === 'radio') {
        resultParams = _param
      } else {
        if (splittedParams.includes(_param)) {
          resultParams = splittedParams.filter(el => el !== _param).join(',')
        } else {
          splittedParams.push(_param)
          resultParams = splittedParams.join(',')
        }
      }
    }

    if (resultParams) {
      router.push(
        { query: { ...router.query, [query]: resultParams } },
        undefined,
        {
          shallow: true,
        }
      )
    } else {
      // Если @resultParams пустой, то удаляем соответствующий параметр @query
      delete router.query[query]
      router.push({ query: router.query }, undefined, {
        shallow: true,
      })
    }
  }

  useEffect(() => {
    setList(prev => {
      const splittedParams = param ? param.split(',') : []

      const copy = [...prev]
      const modifiedList = copy.map(el => ({
        ...el,
        isSelect: splittedParams.includes(el.param),
      }))

      return modifiedList
    })
  }, [param])

  return { onClickListEl, param, list }
}