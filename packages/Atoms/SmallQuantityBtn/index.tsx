import { ChangeEvent, FC, useCallback, useEffect, useRef } from 'react'

import Lucide2MinusIcon from '@/Icons/Lucide2MinusIcon'
import Lucide2PlusIcon from '@/Icons/Lucide2PlusIcon'

interface IProps {
  value?: number
  onValueChange: (value: number) => void
}
const SmallQuantityBtn: FC<IProps> = ({ value: initialValue = 1, onValueChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current) return
    const { value: val } = event.target
    const integerRegexOrEmpty = /^$|^\d*$/
    const maxLength = 3

    if (
      !integerRegexOrEmpty.test(val) ||
      val.length >= maxLength ||
      Number(val) > 99 ||
      Number(val) < 1
    ) {
      inputRef.current.value = initialValue.toString()
      return
    }
    if (val === '') {
      inputRef.current.value = '0'
      return
    }
    inputRef.current.value = Number(val).toString()
  }
  const handleMinus = useCallback(() => {
    if (!inputRef.current) return
    const { value } = inputRef.current
    const newVal = Math.max(1, Number.parseInt(value, 10) - 1).toString()
    inputRef.current.value = newVal
    onValueChange(Number(newVal))
  }, [onValueChange])

  const handlePlus = useCallback(() => {
    if (!inputRef.current) return
    const { value } = inputRef.current
    const newVal = Number(value) >= 99 ? '1' : (Number.parseInt(value, 10) + 1).toString()
    inputRef.current.value = newVal
    onValueChange(Number(newVal))
  }, [onValueChange])

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.value = initialValue.toString()
  }, [initialValue])
  return (
    <div className="flex w-fit justify-center gap-x-0 overflow-hidden rounded-lg border border-ui-primary-500 px-0">
      <button className="size-6 px-2" onClick={handleMinus}>
        <Lucide2MinusIcon color="#6C70F0" />
      </button>
      <div className="flex h-6 w-8 items-center justify-center">
        <input
          ref={inputRef}
          type="text"
          className="size-6 bg-transparent text-center text-ui-note text-ui-primary-500 outline-none"
          onChange={handleValueChange}
        />
      </div>
      <button className="flex size-6 items-center justify-center" onClick={handlePlus}>
        <Lucide2PlusIcon color="#6C70F0" />
      </button>
    </div>
  )
}

export default SmallQuantityBtn
