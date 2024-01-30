'use client'

import {
    FormEvent,
    useMemo,
    useReducer,
    createContext,
} from 'react'
import SummaryToggle from '../summary-toggle/page'
import SummaryFormUrl from './summary-form-url/summary-form-url'
import SummaryFormParagraph from './summary-form-paragraph/summary-form-paragraph'
import SummaryResults from './summary-form-results/summary-form-results'
import { request } from '@/helpers/requestHelpers'
import SummaryReset from '../summary-reset/page'

export interface ISummaryState {
    urlInput: string
    paragraphInput: string
    summarizedText: string
    isLoading: boolean
    isStreaming: boolean
    checked: boolean
}

export interface ISummaryAction {
    type:
        | 'RESET'
        | 'SET_IS_STREAMING'
        | 'SET_SUMMARIZED_TEXT'
        | 'SET_URL_INPUT'
        | 'SET_PARAGRAPH_INPUT'
        | 'SET_IS_CHECKED'
    payload?: any
}

const summaryState: ISummaryState = {
    urlInput: '',
    paragraphInput: '',
    summarizedText: '',
    isLoading: false,
    isStreaming: false,
    checked: true,
}

const summaryReducer = (
    state: ISummaryState,
    action: ISummaryAction
): ISummaryState => {
    switch (action.type) {
        case 'RESET':
            return {
                ...state,
                urlInput: '',
                paragraphInput: '',
                summarizedText: '',
                isLoading: false,
                isStreaming: false,
            }
        case 'SET_IS_STREAMING':
            return {
                ...state,
                isStreaming: action.payload,
            }
        case 'SET_SUMMARIZED_TEXT':
            return {
                ...state,
                summarizedText:
                    state.summarizedText +
                    action.payload,
            }
        case 'SET_URL_INPUT':
            return {
                ...state,
                urlInput: action.payload,
            }
        case 'SET_PARAGRAPH_INPUT':
            return {
                ...state,
                paragraphInput: action.payload,
            }
        case 'SET_IS_CHECKED':
            return {
                ...state,
                checked: action.payload,
            }
        default:
            return state
    }
}

interface ContextType {
    state: ISummaryState
    dispatch: React.Dispatch<ISummaryAction>
}

export const SummaryContext =
    createContext<ContextType | null>(null)

export default function SummaryForm() {
    const [state, dispatch] = useReducer(
        summaryReducer,
        summaryState
    )

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        const url = state.checked
            ? '/api/url'
            : '/api/text'
        const payload = state.checked
            ? state.urlInput
            : state.paragraphInput

        await request.POST(url, payload, dispatch)

        dispatch({ type: 'RESET' })
    }

    const value = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state]
    )

    return (
        <SummaryContext.Provider value={value}>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                <SummaryToggle />
                <SummaryReset />
            </div>
            <form
                className="min-w-full flex flex-col lg:flex-row gap-4 mt-12 lg:min-w-[700px]"
                onSubmit={handleSubmit}
            >
                {state.checked ? (
                    <SummaryFormUrl />
                ) : (
                    <SummaryFormParagraph />
                )}
            </form>
            <SummaryResults />
        </SummaryContext.Provider>
    )
}
