'use client'

import { ChangeEvent, useContext } from 'react'
import { SummaryContext } from '@/features/summary/summary-form/summary-form'

interface IInputProps {
    value: string
    className: string
    placeholder: string
    setValue?: (val: string) => void
}

export default function Input({
    value,
    setValue,
    className,
    placeholder,
}: IInputProps) {
    const summaryCtx = useContext(SummaryContext)

    const handleOnChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        if (summaryCtx) {
            summaryCtx.dispatch({
                type: 'SET_URL_INPUT',
                payload: e.target.value,
            })
        } else if (setValue) {
            setValue(e.target.value)
        }
    }

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            className={className}
        />
    )
}
