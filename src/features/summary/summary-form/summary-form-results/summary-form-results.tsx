'use-client'

import { useRef } from 'react'
import Button from '../../../../components/button/button'
import Markdown from 'react-markdown'
import { labels } from '@/utils/default-summary-text/default-summary-text'
import { ThreeCircles } from 'react-loader-spinner'

interface ISummaryResultsProps {
    summarizedText: string
    isLoading: boolean
    isStreaming: boolean
}

export default function SummaryResults({
    summarizedText,
    isLoading,
    isStreaming,
}: ISummaryResultsProps) {
    const summary = useRef<any>(null)

    const copyToClipboard = (e: any) => {
        if (!summary.current) return

        const summaryContent =
            summary.current.textContent

        navigator.clipboard.writeText(
            summaryContent
        )
    }

    return (
        <div className="w-full lg:w-[700px] min-h-[300px] relative flex justify-center items-center flex-col gap-4 px-8 pt-20 pb-12 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white mt-8">
            <Button
                onClick={copyToClipboard}
                disabled={!isStreaming}
                title="Copy to Clipboard"
                className="bg-button-primary p-4 outline-none border-none rounded-lg hover:bg-button-secondary transition-colors duration-100 absolute right-4 top-4 disabled:opacity-50"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z" />
                </svg>
            </Button>
            {isLoading ? (
                <ThreeCircles
                    visible={true}
                    height="100"
                    width="100"
                    color="#2aab5e"
                    ariaLabel="three-circles-loading"
                />
            ) : (
                <>
                    <h3 className="text-white text-2xl text-left self-start">
                        Summary:
                    </h3>
                    <p
                        className="prose prose-lg prose-neutral text-white"
                        ref={summary}
                    >
                        {summarizedText ? (
                            <Markdown>
                                {summarizedText}
                            </Markdown>
                        ) : (
                            labels.defaultSummaryText
                        )}
                    </p>
                </>
            )}
        </div>
    )
}
