'use client'

import { FormEvent, useState } from 'react'
import SummaryToggle from '../../../features/summary/summary-toggle/page'
import SummaryFormUrl from '@/features/summary/summary-form/summary-form-url/summary-form-url'
import SummaryFormParagraph from './summary-form-paragraph/summary-form-paragraph'
import SummaryResults from '@/features/summary/summary-results/summary-results'
import { request } from '@/helpers/requestHelpers'
import SummaryReset from '../../../features/summary/summary-reset/page'

export default function SummaryForm() {
    const [urlInput, setUrlInput] =
        useState<any>('')
    const [paragraphInput, setParagraphInput] =
        useState<any>('')
    const [summarizedText, setSummarizedText] =
        useState<string>('')
    const [isLoading, setIsLoading] =
        useState<boolean>(false)
    const [isStreaming, setIsStreaming] =
        useState<boolean>(false)
    const [checked, setChecked] =
        useState<boolean>(true)

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        const url = checked
            ? '/api/url'
            : '/api/text'
        const payload = checked
            ? urlInput
            : paragraphInput

        await request.POST(
            url,
            payload,
            setSummarizedText,
            setIsStreaming
        )
    }

    const handleReset = () => {
        setUrlInput('')
        setParagraphInput('')
        setSummarizedText('')
        setIsLoading(false)
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                <SummaryToggle
                    checked={checked}
                    setChecked={setChecked}
                />
                <SummaryReset
                    isLoading={isLoading}
                    onClick={handleReset}
                />
            </div>
            <form
                className="min-w-full flex flex-col lg:flex-row gap-4 mt-12 lg:min-w-[700px]"
                onSubmit={handleSubmit}
            >
                {checked ? (
                    <SummaryFormUrl
                        input={urlInput}
                        setInput={setUrlInput}
                    />
                ) : (
                    <SummaryFormParagraph
                        input={paragraphInput}
                        setInput={
                            setParagraphInput
                        }
                    />
                )}
            </form>
            <SummaryResults
                isLoading={isLoading}
                isStreaming={isStreaming}
                summarizedText={summarizedText}
            />
        </>
    )
}
