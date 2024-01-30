import { ChangeEvent, useContext } from 'react'
import { SummaryContext } from '@/features/summary/summary-form/summary-form'

interface ITextAreaProps {
    value: string
    className: string
    placeholder: string
    setValue?: (val: string) => void
}

export default function TextArea({
    value,
    setValue,
    className,
    placeholder,
}: ITextAreaProps) {
    const summaryCtx = useContext(SummaryContext)

    const handleOnChange = (
        e: ChangeEvent<HTMLTextAreaElement>
    ) => {
        if (summaryCtx) {
            summaryCtx.dispatch({
                type: 'SET_PARAGRAPH_INPUT',
                payload: e.target.value,
            })
        } else if (setValue) {
            setValue(e.target.value)
        }
    }

    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            className={className}
        />
    )
}
